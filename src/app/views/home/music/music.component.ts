import { Component, OnInit } from '@angular/core';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss', './css/font-awesome.min.css']
})
export class MusicComponent implements OnInit {
  socials: any[] = [];
  constructor(public mService: MusicService) { }

  ngOnInit(): void {
    this.mService.getSocials().then(s => this.socials = s);
  }
}
