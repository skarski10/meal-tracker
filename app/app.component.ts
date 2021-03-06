import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <span>Meal Tracker</span>
    </div>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;
  masterMealList: Meal[] = [
    new Meal('Cereal', 'Honey Bunch of Oats with 2% milk', 325),
    new Meal('Peanut Butter and Jelly Sandwich', 'Skippys natural peanut butter, creamy, with Bonne Maman Raspberry Preserves', 320),
    new Meal('Pizza', 'Papa Murphys Pepperoni Pizza', 600)
  ];
  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
