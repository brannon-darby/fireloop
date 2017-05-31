import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { FireForm, FormComponent, CardComponent } from './components';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { FireUi } from './fire-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    NgbModule,
    Ng2BreadcrumbModule.forRoot(),
  ],
  declarations: [
    BodyComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FormComponent,
  ],
  exports: [
    BodyComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FormComponent,
    FormlyModule,
    FormlyBootstrapModule,
  ]
})
export class FireUiModule { }
