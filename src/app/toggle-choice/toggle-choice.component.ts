import {Component} from '@angular/core';

@Component({
  selector: 'app-toggle-choice',
  templateUrl: './toggle-choice.component.html',
  styleUrls: ['./toggle-choice.component.css']
})
export class ToggleChoiceComponent {
  displayText: boolean = false;
  timeStamps: Date[] = [];

  logToggle() {
    console.log('button clicked');
    this.timeStamps.push(new Date());
    this.displayText = !this.displayText;
  }
}
