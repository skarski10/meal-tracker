import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="add-new-meal">
    <span id="new-meal-title">New Meal</span>
    <div>
      <label>Enter Meal:</label><br>
      <div class="col-md-2 new-label">
        <label>Name:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newName><br>
      </div>
      <div class="col-md-2 new-label">
        <label>Details:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newDetails><br>
      </div>
      <div class="col-md-2 new-label">
        <label>Calories:</label>
      </div>
      <div class="col-md-10 new-input">
        <input type="number" #newCalories><br>
      </div>
      <div class="col-md-2 new-label">
      <button class="btn" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
