import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'game', loadChildren: './game/game.module#GameModule'}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
