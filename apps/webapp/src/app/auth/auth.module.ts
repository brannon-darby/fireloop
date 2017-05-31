import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FireUiModule } from '@fireloop/fire-ui';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { StatusComponent } from './status/status.component';
import { AuthEffects } from '../store/effects/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FireUiModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthEffects,
  ]
})
export class AuthModule { }
