import { Component } from '@angular/core';
import { FireUi } from '../../fire-ui';

@Component({
  selector: 'fire-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public fireUi: FireUi) {

  }
}
