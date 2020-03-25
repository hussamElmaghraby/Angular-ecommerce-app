import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private authService :AuthService
  ) { }

  

  login(){
    // it is going to redirect the user to one of the auth provider .. it takes an object 
    this.authService.login();
  }
 

}
