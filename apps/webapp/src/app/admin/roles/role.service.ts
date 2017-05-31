import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FireUi } from '@fireloop/fire-ui';
import { Observable } from 'rxjs/Observable';

import { FireLoopRef, Role } from '../../sdk';

@Injectable()
export class RoleService {

  constructor(
    public fireUi: FireUi,
  ) { }

  getCardButtons() {
    return {
      class: 'btn btn-secondary btn-block float-right',
      icon: 'plus',
      text: 'Create'
    };
  }

  getTableHeaders() {
    return [
      'Name',
      'Description',
      'Users',
      'Actions',
    ];
  }

  getUserTableHeaders() {
    return [
      'Email',
      'First Name',
      'Last Name',
      'Actions'
    ];
  }

  getFormConfig(formType: string, options?: any) {
    switch (formType) {
      case 'create':
        return {
          fields: this.getFormFields(formType),
          showCancel: true,
          action: 'create',
        };
      case 'update':
        return {
          fields: this.getFormFields(formType),
          showCancel: true,
          action: 'update',
        };
      case 'addUser':
        return {
          fields: this.getFormFields(formType, options),
          showCancel: true,
          action: 'addUser',
        };
      default:
        console.log('Unknown type', formType);
        break;
    }

  }

  getFormFields(formType: string, options?: any) {
    switch (formType) {
      case 'create':
        return [
          this.fireUi.fireForm.input('name', {
            label: 'Name',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-tag'
            }
          }),
          this.fireUi.fireForm.input('description', {
            label: 'Description',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-comment'
            }
          }),
        ];
      case 'update':
        return [
          this.fireUi.fireForm.input('name', {
            label: 'Name',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-tag'
            }
          }),
          this.fireUi.fireForm.input('description', {
            label: 'Description',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-comment'
            }
          }),
        ];
      case 'addUser':
        let roles = [];
        let users = [];
        options.roles.forEach((role: any) => (roles.push({ label: role.name, value: role.id })));
        options.users.forEach((user: any) => (users.push({ label: user.email, value: user.id })));
        return [
          this.fireUi.fireForm.select('id', {
            label: 'Role',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-tag'
            },
            options: roles
          }),
          this.fireUi.fireForm.select('user', {
            label: 'User',
            className: 'col-12',
            addonLeft: {
              class: 'fa fa-fw fa-user'
            },
            options: users
          }),
        ];
      default:
        console.log('Unknown type', formType);
        break;
    }
  }

}
