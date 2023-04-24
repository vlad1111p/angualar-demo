import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-first-project';
  clickCounter = 0;

  onClick($event: MouseEvent) {
    console.log('button clicked ' + this.clickCounter);
    this.clickCounter++;
  }
}
