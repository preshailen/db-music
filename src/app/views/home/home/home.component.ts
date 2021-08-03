import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public general: GeneralService) { }

  ngOnInit(): void {
  }

}
