import {Component} from 'angular2/core';

@Component({
  selector: 'my-todos',
	template: `
		<h2>Todos</h2>
		<div>Hello {{name}}</div>
		<input [(ngModel)]="name" />
		<button (click)="sayHello()">Say Hello</button>
		<p>{{message}}</p>
	`
})
export class TodosComponent {
	public name = 'Hari';
	public message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
