import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { FireUi, NavItem } from '@fireloop/fire-ui';
import { Subscription } from 'rxjs/Subscription';

import { RealTime, AccountApi, FireLoopRef, Account, SDKToken } from '../sdk';

@Component({
  template: `
  <div class="row align-items-center justify-content-center">
    <div class="col-12 col-lg-8">
      <fire-card [icon]="userApi.isAuthenticated() ? 'unlock' : 'lock'" title="Auth Status">
        <fire-auth-status></fire-auth-status>
      </fire-card>
    </div>
    <div class="col-12 col-lg-8">
      <fire-card icon="magic"
                title="Auth Actions"
                [nav]="nav">
        <router-outlet></router-outlet>
      </fire-card>
    </div>
  </div>
  `,
  styles: []
})
export class AuthComponent implements OnDestroy {

  private subscriptions: Subscription[] = new Array<Subscription>();
  public user: Account;
  private userRef: FireLoopRef<Account>;
  private token: any;
  public nav: NavItem[];

  constructor(
    private fireUi: FireUi,
    public userApi: AccountApi,
    public router: Router
  ) {
    this.nav = [
      { name: 'Login', link: '/home/auth/login', icon: 'sign-in' },
      { name: 'Register', link: '/home/auth/register', icon: 'registered' }
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  processLogin(event: any) {
    this.subscriptions.push(this.userApi.login(event).subscribe(
      (token: SDKToken) => {
        let sidebarNav = this.fireUi.getSidebarNav();
        sidebarNav[1].icon = 'unlock';
        this.fireUi.setSidebarNav(sidebarNav);
        this.fireUi.toastSuccess('Login Success', 'You have logged in successfully.');
      },
      (err: any) => {
        this.fireUi.toastError('Login Failed', err.message || err.error.message);
      }));
  }

  processLogout(event: any) {
    this.subscriptions.push(this.userApi.logout().subscribe(
      () => {
        let sidebarNav = this.fireUi.getSidebarNav();
        sidebarNav[1].icon = 'lock';
        this.fireUi.setSidebarNav(sidebarNav);
        this.fireUi.toastSuccess('Logout Success', 'You have logged out successfully');
      },
      (err: any) => {
        this.fireUi.toastError('Logout Failed', err.message || err.error.message);
      }));
  }

}
