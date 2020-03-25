import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private authService : AuthService,
    private userService : UserService,
    private router : Router,
  ){

  }

  canActivate() : Observable<boolean> {
   return this.authService.appUser$
    .map(appUser => appUser.isAdmin);
  }
  
}
