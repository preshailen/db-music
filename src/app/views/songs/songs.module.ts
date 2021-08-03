import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    SongsRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SongsComponent ]
})
export class SongsModule { }
