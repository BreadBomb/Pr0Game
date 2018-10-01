import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutes} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, de_DE, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/zh';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GameComponent} from './panel/game.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {GameModule} from './panel/game.module';

registerLocaleData(de);
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    GameModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
