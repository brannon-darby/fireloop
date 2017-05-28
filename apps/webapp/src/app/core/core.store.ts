import { NgModule } from '@angular/core';
import { StoreModule, provideStore, INITIAL_STATE  } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AuthEffects, UserEffects } from '../store/effects';
import { AuthReducer, UsersReducer } from '../store/reducers';

@NgModule({
  imports: [
    StoreModule.provideStore({
      auth: AuthReducer,
      users: UsersReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(UserEffects)
  ],
})
export class CoreStoreModule { }
