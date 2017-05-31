import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FireUiModule } from '@fireloop/fire-ui';
import { ToastyModule } from 'ng2-toasty';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    FireUiModule,
    CoreModule,
  ],
  exports: [
    ToastyModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
