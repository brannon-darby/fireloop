import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing';
import { AuthModule } from '../auth/auth.module';

import { TodoModule } from './todo/todo.module';
import { UiDemoModule } from './ui/ui-demo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    TodoModule,
    UiDemoModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [

  ],
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
})

export class HomeModule { }
