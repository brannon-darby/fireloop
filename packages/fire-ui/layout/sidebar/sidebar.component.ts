import { Component } from '@angular/core';
import { FireUi } from '../../fire-ui';

@Component({
  selector: 'fire-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public fireUi: FireUi
  ) { }

}
