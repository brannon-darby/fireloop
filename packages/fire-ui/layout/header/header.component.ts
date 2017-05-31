import { Component } from '@angular/core';
import { FireUi } from '../../fire-ui';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fire-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public fireUi: FireUi,
    private store: Store<any>
  ) { }

  public logout() {
    this.store.dispatch({ type: 'LOGOUT' });
  }

}
