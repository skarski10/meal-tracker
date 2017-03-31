import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
  <select (change)="onChange($event.target.value)">
     <option value="allMeals" selected="selected">All Meals</option>
     <option value="lowCalorie">Low Calorie Meals</option>
     <option value="highCalorie">High Calorie Meals</option>
   </select>
   <div id="meal-view">
    <div class="row">
      <div *ngFor="let currentMeal of childMealList | count:filterByCount" class="row">
        <div class="col-md-5" >
          <span click)="editButtonHasBeenClicked(currentMeal)" class="_{{currentMeal.calories}}" id="">{{currentMeal.name}}</span>
        </div>
        <div class="col-md-2">
        <span [class]="calorieCount(currentMeal)">
          {{currentMeal.details}}
          </span>
        </div>
        <div class="col-md-1">
          <span [class]="lowMeal(currentMeal)">{{currentMeal.calories}}</span>
        </div>
        <div class="col-md-2">
        </div>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "highMeals";

  // isHigh(clickedMeal: Meal) {
  //   if(clickedMeal.calories >= 11) {
  //     clickedMeal.calories -= 1;
  //   } else if (clickedMeal.calories <= 10 && clickedMeal.calories >= 1) {
  //     clickedMeal.calories -= 1;
  //   } else {
  //     clickedMeal.high = true;
  //   }
  // }

  calorieCount(currentMeal){
    var mealCalories: number = currentMeal.calories;
    if (mealCalories >= 500){
      return "high-calories";
    } else  {
      return "low-calories";
    }
  }

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  // lowMeal(currentMeal) {
  //   var mealCalories: number = parseInt(currentMeal.calories);
  //   if (mealCalories <= 10){
  //     return "low-meal";
  //   } else  {
  //     return "tapped-meal";
  //   }
  // }

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
}
toggleHigh(clickedMeal: Meal, setCalories: boolean) {
     clickedMeal.high = setCalories;
   }
}
