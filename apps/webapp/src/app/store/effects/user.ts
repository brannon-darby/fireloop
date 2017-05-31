/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { BaseEffects } from './base';

import { UserActionTypes, UserActions } from '../actions/user';
import { ErrorActions } from '../actions/error';
import { AccountApi } from '../../sdk';

@Injectable()
export class UserEffects extends BaseEffects {

  @Effect()
  protected login: Observable<Action> = this.actions$
    .ofType(UserActionTypes.LOGIN)
    .map(toPayload)
    .mergeMap((payload) =>
      this.user.login(payload.credentials, payload.include, payload.rememberMe)
        .map((response) => new UserActions.loginSuccess(response))
        .catch((error) => concat(
          of(new UserActions.loginFail(error)),
          of(new ErrorActions.error(error))
        ))
    );

  @Effect()
  protected register: Observable<Action> = this.actions$
    .ofType(UserActionTypes.REGISTER)
    .map(toPayload)
    .mergeMap((payload) =>
      this.user.create(payload.credentials)
        .map((response) => new UserActions.registerSuccess(response))
        .catch((error) => concat(
          of(new UserActions.registerFail(error)),
          of(new ErrorActions.error(error))
        ))
    );

  @Effect()
  protected logout: Observable<Action> = this.actions$
    .ofType(UserActionTypes.LOGOUT)
    .map(toPayload)
    .mergeMap((payload) =>
      this.user.logout()
        .map(() => new UserActions.logoutSuccess())
        .catch((error) => concat(
          of(new UserActions.logoutFail()),
          of(new ErrorActions.error(error))
        ))
    );

  @Effect() protected create: any;
  @Effect() protected createMany: any;
  @Effect() protected findById: any;
  @Effect() protected find: any;
  @Effect() protected findOne: any;
  @Effect() protected updateAll: any;
  @Effect() protected deleteById: any;
  @Effect() protected updateAttributes: any;
  @Effect() protected upsert: any;
  @Effect() protected upsertWithWhere: any;
  @Effect() protected replaceOrCreate: any;
  @Effect() protected replaceById: any;
  @Effect() protected patchOrCreate: any;
  @Effect() protected patchAttributes: any;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(AccountApi) public user: AccountApi
  ) {
    super(actions$, user, 'Account', UserActionTypes);
  }
}
