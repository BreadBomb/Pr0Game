import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import {AppRoutes} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, de_DE, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/zh';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
