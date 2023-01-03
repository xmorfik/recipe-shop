import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[] = [
    new Ingredient('Meat', 300),
    new Ingredient('Bread', 2)
  ];

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
