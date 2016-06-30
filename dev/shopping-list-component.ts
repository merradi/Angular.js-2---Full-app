import {Component} from 'angular2/core';

@Component({
    selector: 'shopping-list',
    template: `
        <ul>
			<li *ngFor="#shoppingListItem of shoppingListItems"
			(click)="onItemClicked(shoppingListItem)"
		>{{shoppingListItem.name}}
			</li>
		</ul>
		<input type="text" [(ngModel)]="selectedItem.name" #shoppingListItem>
		
		<button (click)="onAddItem(shoppingListItem)">Add Item</button>
    `,
})
export class ShoppingListComponent{
	public shoppingListItems = [
		{name: "Milk"},
		{name: "Sugar"},
		{name: "Bread"},
	];
	public selectedItem ={name:""};
	
	onItemClicked(shoppingListItem) {
	 this.selectedItem = shoppingListItem;
	}
	
	onAddItem(shoppingListItem) {
	 this.shoppingListItems.push({name: shoppingListItem.value}};
	}
	
	
}