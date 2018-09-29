import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from './game.component';
import {GameSearchComponent} from './components/game-search/game-search.component';
import {GameRoutes} from './game.routing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {NgZorroAntdModule} from 'ng-zorro-antd';

library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    GameRoutes,
    NgZorroAntdModule,
    FontAwesomeModule
  ],
  declarations: [
    GameComponent,
    GameSearchComponent
  ]
})
export class GameModule { }
