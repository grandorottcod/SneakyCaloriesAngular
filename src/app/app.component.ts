import { Component } from '@angular/core';
import { SearchRecipeService } from './recipe-service.service';
import { RecipeGlobal } from './pojos/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SnearkyCalories';
  recipeResult: RecipeGlobal;
  constructor(private searchRecipeService: SearchRecipeService){}

  ngOnInit(){
    this.getRecipeInfo();
  }

  getRecipeInfo(){
    this.searchRecipeService.getRecipeInfo().
    subscribe(recipeResult => {this.recipeResult = recipeResult;});
 }
}
