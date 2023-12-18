import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'management-portal-ui';
  isUserLoggedIn(){
    if(localStorage.getItem("isUserLoggedIn"))
      return true;
    return false;
  }
}
