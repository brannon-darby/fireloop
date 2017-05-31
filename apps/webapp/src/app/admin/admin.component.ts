import { Component } from '@angular/core';
import { FireUi, NavItem } from '@fireloop/fire-ui';

@Component({
  selector: 'fire-admin',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./admin.component.scss']

})
export class AdminComponent {
  private authIcon;
  private sidebarNav: NavItem[];

  constructor(
    private fireUi: FireUi,
  ) {
    this.fireUi.setSidebarNav([
      {
        'name': 'Dashboard',
        'link': '/admin/dashboard',
        'icon': 'tachometer'
      },
      {
        'name': 'Users',
        'link': '/admin/users',
        'icon': 'users'
      },
      {
        'name': 'Roles',
        'link': '/admin/roles',
        'icon': 'tags'
      },
      {
        'name': 'Controls',
        'link': '/admin/controls',
        'icon': 'ban'
      },
    ]);
  }

}
