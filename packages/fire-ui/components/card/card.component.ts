import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../fire-ui';

@Component({
  selector: 'fire-card',
  styles: [`
    .nav-link {
      color: #fff;
    }
    `],
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() createButton: any;
  @Input() modalTemplate: any;
  @Input() nav: NavItem[];
  @Output() action = new EventEmitter();

  constructor() {

  }

}
