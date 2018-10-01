import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {GameComponent} from './panel/game.component';
import {GameSearchComponent} from './panel/components/game-search/game-search.component';
import {GameScoreboardComponent} from './panel/components/game-scoreboard/game-scoreboard.component';
import {PlayComponent} from './panel/components/play/play.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'game', component: GameComponent, children: [
      {path: '', redirectTo: 'search', pathMatch: 'full'},
      {path: 'search', component: GameSearchComponent},
      {path: 'scoreboard', component: GameScoreboardComponent},
  ]},
  {path: 'play', component: PlayComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
