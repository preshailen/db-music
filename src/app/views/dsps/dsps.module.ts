import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CommonModule } from '@angular/common';
import { DspsComponent } from './dsps.component';
import { DspsRoutingModule } from './dsps-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DspsRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DspsComponent ]
})
export class DspsModule { }
