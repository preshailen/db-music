import {Component} from '@angular/core';
import { GeneralService } from 'app/services/general.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['../../views/shared.scss']
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(public general: GeneralService) {}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
