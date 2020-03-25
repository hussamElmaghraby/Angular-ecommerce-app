import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
   private authService:AuthService,
    private router : Router 
  ) { }
  canActivate(route , state:RouterStateSnapshot):Observable<boolean> {
  return  this.authService.user$.map(user =>{
      if(user) return true;
      // returnUrl will return you to your requested page before login 
      this.router.navigate(['/login'] , {queryParams : { returnUrl :state.url }});
      return false;
    });
  }

  
}
