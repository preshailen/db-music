import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralService } from '../../services/general.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss', '../shared.scss']
})
export class AlbumsComponent implements OnInit {
  private modalRef: NgbModalRef;
  albums: any[] = [];
  newAlbumForm: FormGroup = null;
  imageSource: any = null;
  viewImage: any = null;
  constructor(public mService: MusicService, public gService: GeneralService, private modal: NgbModal, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.mService.getAlbums().then(p => this.albums = p);
  }
  view(image: any, content: any) {
    if (image) {
      this.viewImage = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64, ' + image);
    } else {
      this.viewImage = null;
    }
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  closeView(reason: string) {
    this.viewImage = null;
    this.modalRef.close();
  }
  edit(val: any, content) {
    console.log(val);
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  add(content: any) {
    this.newAlbumForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      releaseDate: new FormControl(null, Validators.required),
      logo: new FormControl(null)
    });
    this.newAlbumForm.get('logo').valueChanges.subscribe(i => {
      this.imageSource = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${i}`)
    });
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  create() {
    if (this.newAlbumForm.invalid) {
      this.newAlbumForm.markAllAsTouched();
    } else {
      const album = {
        title: this.newAlbumForm.get('title').value,
        releaseDate: this.newAlbumForm.get('releaseDate').value,
        clicks: null,
        logo: this.newAlbumForm.get('logo').value
      };
      this.mService.addAlbum(album).then(y => {
        this.albums.push(y);
        this.gService.success('Successfully Added Album!');
        this.close('');
      }).catch(err => this.gService.error('Could Not Add Album!'));
    }
  }
  change() {
    document.getElementById('file').click();
  }
  handleFile($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]);
      reader.onload = (event) => {
        this.newAlbumForm.get('logo').setValue((event.target.result as string).replace('data:image/png;base64,',''));
      }
    }
  }
  close(reason: string) {
    this.imageSource = null;
    this.newAlbumForm = null;
    this.modalRef.close();
  }
  delete(id: string) {
    this.gService.confirmDelete('Are you sure?').then(f => {
      this.mService.deleteAlbum(id).then(i => {
        if (i) {
          this.gService.success('Successfully Removed Album!');
          this.albums = this.albums.filter(s => s._id !== id);
        } else {
          this.gService.error('Could Not Remove Album!');
        }
      }).catch(err => this.gService.error('Could Not Remove Album!'));
    }).catch(err => err);
  }
  get n() {
    return this.newAlbumForm.controls;
  }
}
