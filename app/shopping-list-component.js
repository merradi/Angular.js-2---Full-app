System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "Milk" },
                        { name: "Sugar" },
                        { name: "Bread" },
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
                    this.shoppingListItems.push({ name: shoppingListItem.value });
                };
                ;
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <ul>\n\t\t\t<li *ngFor=\"#shoppingListItem of shoppingListItems\"\n\t\t\t(click)=\"onItemClicked(shoppingListItem)\"\n\t\t>{{shoppingListItem.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<input type=\"text\" [(ngModel)]=\"selectedItem.name\" #shoppingListItem>\n\t\t\n\t\t<button (click)=\"onAddItem(shoppingListItem)\">Add Item</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO29CQUNRLHNCQUFpQixHQUFHO3dCQUMxQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7d0JBQ2QsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO3dCQUNmLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztxQkFDZixDQUFDO29CQUNLLGlCQUFZLEdBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Z0JBUS9CLENBQUM7Z0JBTkQsNkNBQWEsR0FBYixVQUFjLGdCQUFnQjtvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCx5Q0FBUyxHQUFULFVBQVUsZ0JBQWdCO29CQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBQyxDQUFBLENBQUE7Z0JBQUEsQ0FBQzs7Z0JBM0I3RDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsMFZBVVQ7cUJBQ0osQ0FBQzs7eUNBQUE7Z0JBZUQsNEJBQUM7WUFBRCxDQWRELEFBY0UsSUFBQTtZQWRGLHlEQWNFLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsPlxuXHRcdFx0PGxpICpuZ0Zvcj1cIiNzaG9wcGluZ0xpc3RJdGVtIG9mIHNob3BwaW5nTGlzdEl0ZW1zXCJcblx0XHRcdChjbGljayk9XCJvbkl0ZW1DbGlja2VkKHNob3BwaW5nTGlzdEl0ZW0pXCJcblx0XHQ+e3tzaG9wcGluZ0xpc3RJdGVtLm5hbWV9fVxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRJdGVtLm5hbWVcIiAjc2hvcHBpbmdMaXN0SXRlbT5cblx0XHRcblx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkFkZEl0ZW0oc2hvcHBpbmdMaXN0SXRlbSlcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcblx0cHVibGljIHNob3BwaW5nTGlzdEl0ZW1zID0gW1xuXHRcdHtuYW1lOiBcIk1pbGtcIn0sXG5cdFx0e25hbWU6IFwiU3VnYXJcIn0sXG5cdFx0e25hbWU6IFwiQnJlYWRcIn0sXG5cdF07XG5cdHB1YmxpYyBzZWxlY3RlZEl0ZW0gPXtuYW1lOlwiXCJ9O1xuXHRcblx0b25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKSB7XG5cdCB0aGlzLnNlbGVjdGVkSXRlbSA9IHNob3BwaW5nTGlzdEl0ZW07XG5cdH1cblx0XG5cdG9uQWRkSXRlbShzaG9wcGluZ0xpc3RJdGVtKSB7XG5cdCB0aGlzLnNob3BwaW5nTGlzdEl0ZW1zLnB1c2goe25hbWU6IHNob3BwaW5nTGlzdEl0ZW0udmFsdWV9fTtcblx0fVxuXHRcblx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
