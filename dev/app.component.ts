import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list-component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 bienvenue </h1>
        <p>This is the app component</p>
		<shopping-list></shopping-list>
    `,
	directives: [ShoppingListComponent]
})
export class AppComponent {

}