import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <select (change)="onChange($event.target.value)">
       <option value="allMeals" selected="selected">All Meals</option>
       <option value="low-calorie">Low Calorie Meals</option>
       <option value="high-calorie">High Calorie Meals</option>
     </select>
  </div>
  <div class="row" id="meal-view">
    <div class="row">
     <div class="col-md-4">
       <span>Meal:</span>
     </div>
     <div class="col-md-4">
       <span>Details:</span>
     </div>
     <div class="col-md-4">
       <span>Calories:</span>
     </div>
    </div>
    <hr>
    <div class="row">
      <div *ngFor="let currentMeal of childMealList | count:filterByCount" class="row">
        <div class="col-md-4" >
          <span (click)="editButtonHasBeenClicked(currentMeal)" class="_{{currentMeal.calories}}" id="">{{currentMeal.name}}</span>
        </div>
        <div class="col-md-4">
          <span>{{currentMeal.details}}</span>
        </div>
        <div class="col-md-4">
          <span>{{currentMeal.calories}}</span>
        </div>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCount: string = "highMeals";

  isHigh(clickedKeg: Meal) {
  if(clickedKeg.calories >= 500) {
    clickedKeg.high = true;
  } else {
    clickedKeg.high = false;
  }
}

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenu) {
  this.filterByCount = optionFromMenu;
  }
  toggleHigh(clickedMeal: Meal, setCount: boolean) {
     clickedMeal.high = setCount;
  }
}
