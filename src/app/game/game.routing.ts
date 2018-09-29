import {RouterModule, Routes} from '@angular/router';
import {GameSearchComponent} from './components/game-search/game-search.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: GameSearchComponent}
];

export const GameRoutes: ModuleWithProviders = RouterModule.forChild(routes);
