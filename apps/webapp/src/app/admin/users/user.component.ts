import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireUi } from '@fireloop/fire-ui';
import { Subscription } from 'rxjs/Subscription';

import { RealTime, FireLoopRef, Account } from '../../sdk';
import { UserFormComponent } from './form/user-form.component';
import { UserService } from './user.service';

@Component({
  selector: 'fire-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnDestroy {

  private modalRef;
  public users: Account[] = new Array<Account>();
  private userRef: FireLoopRef<Account>;
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private modal: NgbModal,
    public fireUi: FireUi,
    public userService: UserService,
    private rt: RealTime,
  ) {
    this.subscriptions.push(
      this.rt.onReady().subscribe(
        () => {
          this.userRef = this.rt.FireLoop.ref<Account>(Account);
          this.subscriptions.push(this.userRef.on('change', {
            include: 'roles',
            order: 'email ASC'
          }).subscribe(
            (users: Account[]) => {
              this.users = users;
              console.log(users)
            }));
        }));
  }

  ngOnDestroy() {
    this.userRef.dispose();
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  showDialog(type, item) {
    this.modalRef = this.modal.open(UserFormComponent, { size: 'sm' });
    this.modalRef.componentInstance.item = item;
    this.modalRef.componentInstance.formConfig = this.userService.getFormConfig(type);
    this.modalRef.componentInstance.title = (type === 'create') ? 'Create User' : 'Update User';
    this.subscriptions.push(this.modalRef.componentInstance.action.subscribe(event => this.handleAction(event)));
  }

  create() {
    this.showDialog('create', new Account());
  }

  update(user: Account) {
    this.showDialog('update', user);
  }

  delete(user: Account) {
    const question = {
      title: 'Delete User',
      html: `
        <p class="lead">Are you sure you want to delete User
          <span class="font-weight-bold font-italic">${user.email}</span>?
        </p>
      `,
      confirmButtonText: 'Yes, Delete'
    };
    this.fireUi.alertError(question, () => this.handleAction({ type: 'delete', payload: user }), () => { });
  }

  handleAction(event) {
    switch (event.type) {
      case 'create':
        this.subscriptions.push(this.userRef.create(event.payload).subscribe(
          () => {
            this.modalRef.close();
            this.fireUi.toastSuccess('User Created', 'The User was created successfully.');
          }, (err) => {
            this.modalRef.close();
            this.fireUi.toastError('Create User Failed', err.message || err.error.message);
          },
        ));
        break;
      case 'update':
        this.subscriptions.push(this.userRef.upsert(event.payload).subscribe(
          () => {
            this.modalRef.close();
            this.fireUi.toastSuccess('User Updated', 'The User was updated successfully.');
          }, (err) => {
            this.modalRef.close();
            this.fireUi.toastError('Update User Failed', err.message || err.error.message);
          },
        ));
        break;
      case 'delete':
        this.subscriptions.push(this.userRef.remove(event.payload).subscribe(
          () => {
            this.fireUi.toastSuccess('User Deleted', 'The User was deleted successfully.');
          },
          (err) => {
            this.fireUi.toastError('Delete User Failed', err.message || err.error.message);
          },
        ));
        break;
      default:
        return console.log('Unknown event action', event);
    }
  }

}
