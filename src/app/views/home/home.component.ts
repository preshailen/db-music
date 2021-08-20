import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './shared.scss', './music/css/font-awesome.min.css']
})
export class HomeComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor(public general: GeneralService) { }

  ngOnInit(): void {

  }
}
