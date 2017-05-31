import { Component } from '@angular/core';
import { FireUi } from '../../fire-ui';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'fire-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(
    public fireUi: FireUi,
    public breadcrumbService: BreadcrumbService
  ) { }
}
