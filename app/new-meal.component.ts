import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="add-new-meal" id="new-meal-form">
    <div class="row most-titles">
      <span>New Meal</span>
    </div>
    <div class="row">
      <div class="row">
        <div class="col-md-6 new-label">
          <label>Name:</label><br>
        </div>
        <div class="col-md-6 new-input">
          <input #newName><br>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 new-label" >
          <label>Details:</label><br>
        </div>
        <div class="col-md-6 new-input" >
          <textarea #newDetails></textarea><br>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 new-label">
          <label>Calories:</label>
        </div>
        <div class="col-md-6 new-input">
          <input type="number" #newCalories><br>
        </div>
      </div>
      <div class="row">
        <button class="btn all-buttons" id="add-new-button" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
      </div>
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
