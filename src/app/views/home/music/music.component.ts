import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/services/general.service';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss', './css/font-awesome.min.css', '../shared.scss']
})
export class MusicComponent implements OnInit {
  socials: any[] = [];
  albums: any[] = [];
  constructor(public mService: MusicService, public gService: GeneralService) { }

  ngOnInit(): void {
    this.mService.getSocials().then(s => this.socials = s);
    this.mService.getAlbums().then(o => this.albums = o);
  }
}
