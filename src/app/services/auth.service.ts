import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {UserService} from './user.service';
import { AppUser } from '../models/app-user';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<firebase.User> ;

  constructor(
    private afAuth : AngularFireAuth,
    private route:ActivatedRoute,
    private userService :UserService
  ) {
    this.user$ = afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // (key , value)
    localStorage.setItem('returnUrl' , returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }
  // we will use this methof in two places (AdminAuthGuard and Navbar)
  get appUser$() : Observable<AppUser> {
    return this.user$
    .switchMap(user => {
      if(user) return this.userService.getUser(user.uid).valueChanges();

      return Observable.of(null);
    });
  }
}
