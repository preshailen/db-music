import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss', '../shared.scss']
})
export class SongsComponent implements OnInit {
  private modalRef: NgbModalRef;
  songs: any[] = [];
  albums: any[] = [];
  newSongForm: FormGroup = null;
  constructor(public mService: MusicService, public gService: GeneralService, private modal: NgbModal) { }

  ngOnInit(): void {
   // this.mService.getSongs().then(g => this.songs = g);
    this.mService.getAlbums().then(o => {console.log(o); this.albums = o});
  }
  add(content: any) {
    this.newSongForm = new FormGroup({
      album: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      links: new FormArray([])
    });
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  create() {
    console.log(this.newSongForm.get('album').value)
  }
  close(reason: string) {
    this.newSongForm = null;
    this.modalRef.close();
  }
  get n() {
    return this.newSongForm.controls;
  }
}
