import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username: string = '';

  allowUserReset: boolean = false;

  resetUsername() {
    this.username = '';
  }
}
