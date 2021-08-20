import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './services/auth.guard';
import { MusicResolverResolver } from './services/music-resolver.resolver';
import { RegisterComponent } from './views/auth/register/register.component';
import { AboutComponent } from './views/home/about/about.component';
import { ContactComponent } from './views/home/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { AlbumSingleComponent } from './views/home/music/album-single/album-single.component';
import { MusicComponent } from './views/home/music/music.component';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' },
    children: [
      { path: '', redirectTo: 'music', pathMatch: 'full' },
      { path: 'music', component: MusicComponent, data: { title: 'Music' } },
      { path: 'music/:id', component: AlbumSingleComponent, data: { title: 'Single' }, resolve: { data: MusicResolverResolver } },
      { path: 'about', component: AboutComponent, data: { title: 'About' } },
      { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
      { path: '**', redirectTo: 'music', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Login' } },
  { path: 'dash', canActivate: [AuthGuard], component: DefaultLayoutComponent, data: { title: 'Home' },
    children: [
      { path: '', redirectTo: 'albums', pathMatch: 'full'},
      { path: 'base', loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule) },
      { path: 'albums', loadChildren: () => import('./views/albums/albums.module').then(d => d.AlbumsModule) },
      { path: 'socials', loadChildren: () => import('./views/socials/socials.module').then(p => p.SocialsModule) },
      { path: 'dsps', loadChildren: () => import('./views/dsps/dsps.module').then(o => o.DspsModule) },
      { path: 'buttons', loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule) },
      { path: 'charts', loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule) },
      { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'icons', loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule) },
      { path: 'notifications', loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: 'theme', loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule) },
      { path: 'widgets', loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule) },
      { path: '**', redirectTo: 'albums', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
