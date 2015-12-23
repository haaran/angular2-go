import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {TodosComponent} from './todos.component';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Characters']">Characters</a>
    <a [routerLink]="['Todos']">Todos</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/characters', as: 'Characters', component: CharactersComponent },
  { path: '/todos', as: 'Todos', component: TodosComponent }
])
export class AppComponent { }
