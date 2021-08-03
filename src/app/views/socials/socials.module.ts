import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SocialsComponent } from './socials.component';
import { SocialsRoutingModule } from './socials-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    SocialsRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SocialsComponent ]
})
export class SocialsModule { }
