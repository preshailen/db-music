import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialsComponent } from './socials.component';

const routes: Routes = [
  { path: '', component: SocialsComponent, data: { title: 'Socials' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialsRoutingModule {}
