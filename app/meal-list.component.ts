import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <select (change)="onChange($event.target.value)">
       <option value="all-meals" selected="selected">All Meals</option>
       <option value="low-calorie">Low Calorie Meals</option>
       <option value="high-calorie">High Calorie Meals</option>
     </select>
  </div>
  <div class="row" id="meal-view">
    <div class="row" id="meal-view-title">
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
    <div class="row" id="meal-details">
      <div *ngFor="let currentMeal of childMealList | count:filterByCount" class="row">
        <div class="col-md-4" >
          <span (click)="editButtonHasBeenClicked(currentMeal)" class="_{{currentMeal.calories}} name">{{currentMeal.name}}</span><br>
        </div>
        <div class="col-md-4 details">
          <span>{{currentMeal.details}}</span><br>
        </div>
        <div class="col-md-4 calories">
          <span>{{currentMeal.calories}}</span><br>
        </div>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  findCount(currentMeal){}
  filterByCount: string = "all-meals";

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenu) {
  this.filterByCount = optionFromMenu;
  }
}
