import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="row" id=edit-meal-form>
      <div class="row most-titles">
        {{childSelectedMeal.name}}
      </div>
      <div class="row">
        Edit Meal
      </div>
      <div class="row">
        <div class="col-md-6 edit-labels">
          <label>Name:</label>
        </div>
        <div class="col-md-6 edit-inputs">
          <input [(ngModel)]="childSelectedMeal.name">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 edit-labels">
          <label>Details:</label>
        </div>
        <div class="col-md-6 edit-inputs">
          <textarea [(ngModel)]="childSelectedMeal.details"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 edit-labels">
          <label>Calories:</label>
        </div>
        <div class="col-md-6 edit-inputs">
          <input [(ngModel)]="childSelectedMeal.calories">
        </div>
      </div>
      <div class="row">
        <button class="btn all-buttons"(click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
