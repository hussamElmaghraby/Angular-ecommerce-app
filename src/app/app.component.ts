import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // when the user logs in .. read the localstorage and redirect ..
  constructor(
    private userService :UserService,
    private authService : AuthService,
    private router : Router
  ){
    authService.user$.subscribe(user => {
      if(user){
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigate([returnUrl]);
      }
    });
  }
}
