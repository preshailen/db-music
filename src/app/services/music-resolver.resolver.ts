import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GeneralService } from './general.service';
import { MusicService } from './music.service';

@Injectable({
  providedIn: 'root'
})
export class MusicResolverResolver implements Resolve<any[]> {
  constructor(public gService: GeneralService, public mService: MusicService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> {
    const promises = [];
    promises.push(this.mService.getAlbum(route.params['id']));
    promises.push(this.mService.getLinks(route.params['id']));
    promises.push(this.mService.getDSPS());
    promises.push(this.mService.getSocials());
    return Promise.all(promises);
  }
}
