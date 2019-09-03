import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Maida', 4),
        new Ingredient('Potato', 10)
      ]
      ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Tomato', 5),
        new Ingredient('Masala', 1),
        new Ingredient('Roti', 3)
      ]
      )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
