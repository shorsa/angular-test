import { Component } from '@angular/core';
import { MenuItems } from './menu-items.constants';

export interface MenuItem {
  url: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  menuItems: MenuItem[];
  accountRoute: string;

  constructor(
  ) {
    this.menuItems = MenuItems;
  }


}
