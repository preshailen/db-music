import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    AlbumsRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AlbumsComponent ]
})
export class AlbumsModule { }
