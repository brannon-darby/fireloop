import { Injectable } from '@angular/core';
import { RealTime, FireLoopRef, Todo } from '../../sdk';
import { Subscription } from 'rxjs/Subscription';
import { FireUi } from '@fireloop/fire-ui';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  public subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private fireUi: FireUi,
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
      'Text',
      'Due Date',
      'Done?',
      'Actions',
    ];
  }

  getFormConfig(formType: string) {
    return {
      fields: this.getFormFields(formType),
      showCancel: true,
      buttonColClass: 'col-12',
      action: formType === 'create' ? formType : 'update',
    };
  }

  getFormFields(formType: string) {
    const fields = [
      this.fireUi.fireForm.input('text', {
        label: 'Text',
        addonLeft: {
          class: 'fa fa-fw fa-commenting'
        }
      }),
      this.fireUi.fireForm.date('dueAt', {
        label: 'Due Date'
      }),
    ];
    if (formType === 'update') {
      fields.push(
        this.fireUi.fireForm.checkbox('done', {
          label: 'Done?',
        }),
      );
    }
    return fields;
  }

}
