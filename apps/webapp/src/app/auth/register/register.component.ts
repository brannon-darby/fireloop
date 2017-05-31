import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { FireUi } from '@fireloop/fire-ui';

import { UserActions } from '../../store/actions';

@Component({
  selector: 'fire-auth-register',
  template: `
    <fire-form [config]="formConfig" [item]="registration" (action)="submit()"></fire-form>
  `,
  styles: []
})
export class RegisterComponent {

  private subscriptions: Subscription[] = new Array<Subscription>();

  public registration = {
    email: null,
    username: null,
    password: null,
    firstName: null,
    lastName: null,
  }

  public formConfig: {};

  constructor(
    private store: Store<any>,
    private fireUi: FireUi,
    private uiService: FireUi
  ) {
    this.formConfig = this.getFormConfig();
  }

  getFormConfig() {
    return {
      fields: this.getFormFields(),
      showCancel: false,
      action: 'register',
      submitButtonText: 'Submit'
    };
  }

  getFormFields() {
    return [
      this.fireUi.fireForm.email('email', {
        label: 'Email',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-envelope-o'
        }
      }),
      this.fireUi.fireForm.password('password', {
        label: 'Password',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-key'
        }
      }),
      this.fireUi.fireForm.input('firstName', {
        label: 'First Name',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-user-o'
        }
      }),
      this.fireUi.fireForm.input('lastName', {
        label: 'Last Name',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-user-o'
        }
      })
    ];
  }

  submit() {
    this.registration.username = this.registration.email;
    this.store.dispatch(new UserActions.register({ credentials: this.registration }));
  }

}
