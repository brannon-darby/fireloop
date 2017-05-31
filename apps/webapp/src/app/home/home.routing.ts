import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { TodoComponent } from './todo/todo.component';
import { UiDemoComponent } from './ui/ui-demo.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ]
      },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'ui',
        component: UiDemoComponent,
        children: [
          { path: '', redirectTo: 'notifications', pathMatch: 'full' },
          { path: 'notifications', component: NotificationsComponent },
        ]
      },
      { path: 'todos', component: TodoComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule { }
