import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss', '../shared.scss']
})
export class SocialsComponent implements OnInit {
  private modalRef: NgbModalRef;
  socials: any[] = [];
  iconList: any[] = [];
  newSocialForm: FormGroup = null;
  constructor(public mService: MusicService, public gService: GeneralService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.mService.getSocials().then(p => this.socials = p);
    this.mService.getSocialIconList().then(y => this.iconList = y);
  }
  add(content: any) {
    this.newSocialForm = new FormGroup({
      service: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      handle: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      icon: new FormControl(null, [Validators.required])
    });
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  create() {
    if (this.newSocialForm.invalid) {
      this.newSocialForm.markAllAsTouched();
    } else {
      const social = {
        service: this.newSocialForm.get('service').value,
        handle: this.newSocialForm.get('handle').value,
        icon: this.newSocialForm.get('icon').value
      };
      this.mService.addSocial(social).then(y => {
        this.socials.push(y);
        this.gService.success('Successfully Added Social!');
        this.close('');
      }).catch(err => this.gService.error('Could Not Add Social!'));
    }
  }
  close(reason: string) {
    this.newSocialForm = null;
    this.modalRef.close();
  }
  view(url: string) {
    window.open(url, '_blank');
  }
  delete(id: string) {
    this.gService.confirmDelete('Are you sure?').then(f => {
      this.mService.deleteSocial(id).then(i => {
        if (i) {
          this.gService.success('Successfully Removed Social!');
          this.socials = this.socials.filter(s => s._id !== id);
        } else {
          this.gService.error('Could Not Remove Social!');
        }
      }).catch(err => this.gService.error('Could Not Remove Social!'));
    }).catch(err => err);
  }
  get n() {
    return this.newSocialForm.controls;
  }
}
