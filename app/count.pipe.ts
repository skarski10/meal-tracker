import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "count",
  pure: false
})

export class CountPipe implements PipeTransform {
  transform(input: Meal[], desiredCount) {
    var output: Meal[] = [];
    if(desiredCount === "low-calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].high === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCount === "high-calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].high === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
