import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameSearchComponent} from './components/game-search/game-search.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { GameScoreboardComponent } from './components/game-scoreboard/game-scoreboard.component';
import { PlayComponent } from './components/play/play.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FontAwesomeModule,
  ],
  declarations: [
    GameSearchComponent,
    GameScoreboardComponent,
    PlayComponent,
  ]
})
export class GameModule { }
