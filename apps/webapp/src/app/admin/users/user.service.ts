import { Injectable } from '@angular/core';
import { FireUi } from '@fireloop/fire-ui';

import { FireLoopRef, Account } from '../../sdk';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private fireUi: FireUi,
  ) {

  }

  getCardButtons() {
    return {
      class: 'btn btn-secondary btn-block float-right',
      icon: 'plus',
      text: 'Create'
    };
  }

  getTableHeaders() {
    return [
      'Email',
      'First Name',
      'Last Name',
      'Actions',
    ];
  }

  getFormConfig(formType: string) {
    return {
      fields: this.getFormFields(formType),
      showCancel: true,
      action: formType === 'create' ? formType : 'update',
    };
  }

  getFormFields(formType: string) {
    let fields = [
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
      }),
    ];
    if (formType === 'update') {
      fields.splice(1, 1);
    }
    return fields;
  }

}
