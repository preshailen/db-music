import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-single',
  templateUrl: './album-single.component.html',
  styleUrls: ['./album-single.component.scss', '../music.component.scss', '../css/font-awesome.min.css']
})
export class AlbumSingleComponent implements OnInit {
  title: string = null;
  cover: any = null;
  links: any[] = [];
  dsps: any[] = [];
  socials: any[] = [];
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.title = data.data[0].title;
      this.cover = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64, ' + data.data[0].logo);
      this.links = data.data[1];
      this.dsps = data.data[2];
      this.socials = data.data[3];
    });
  }
  getIcon(id: string): string {
    return this.dsps.find(d => d._id === id).icon;
  }
  getAction(id: string): string {
    return this.dsps.find(d => d._id === id).verb;
  }
  getService(id: string): string {
    return this.dsps.find(d => d._id === id).service;
  }
}
