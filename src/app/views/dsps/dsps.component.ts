import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from 'app/services/general.service';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-dsps',
  templateUrl: './dsps.component.html',
  styleUrls: ['./dsps.component.scss', '../shared.scss']
})
export class DspsComponent implements OnInit {
  private modalRef: NgbModalRef;
  dsps: any[] = [];
  newDspForm: FormGroup = null;
  constructor(public mService: MusicService, public gService: GeneralService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.mService.getDSPS().then(o => {
      console.log(o)
      this.dsps = o;
    });
  }
  add(content: any) {
    this.newDspForm = new FormGroup({
      service: new FormControl(null, Validators.required),
      verb: new FormControl(null, Validators.required),
      icon: new FormControl(null, Validators.required)
    });
    this.modalRef = this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: false, backdrop: 'static' });
    this.modalRef.result.then((result) => {}, (reason) => {});
  }
  create() {
    if (this.newDspForm.invalid) {
      this.newDspForm.markAllAsTouched();
    } else {
      const dsp = {
        service: this.newDspForm.get('service').value,
        verb: this.newDspForm.get('verb').value,
        icon: 'fa fa-' + this.newDspForm.get('icon').value
      };
      this.mService.addDSP(dsp).then(y => {
        this.dsps.push(y);
        this.gService.success('Successfully Added Dsp!');
        this.close('');
      }).catch(err => this.gService.error('Could Not Add Dsp!'));
    }
  }
  close(reason: string) {
    this.newDspForm = null;
    this.modalRef.close();
  }
  delete(id: string) {
    this.gService.confirmDelete('Are you sure?').then(f => {
      this.mService.deleteDSP(id).then(i => {
        if (i) {
          this.gService.success('Successfully Removed Dsp!');
          this.dsps = this.dsps.filter(s => s._id !== id);
        } else {
          this.gService.error('Could Not Remove Dsp!');
        }
      }).catch(err => this.gService.error('Could Not Remove Dsp!'));
    }).catch(err => err);
  }
  get n() {
    return this.newDspForm.controls;
  }
}
