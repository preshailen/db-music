import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DspsComponent } from './dsps.component';

const routes: Routes = [
  { path: '', component: DspsComponent, data: { title: 'Dsps' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DspsRoutingModule {}
