import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private db : AngularFireDatabase,

  ) { }

  getCategory(){
    // order categories by its child property names
    return this.db.list('/categories' , ref => ref.orderByChild('name') ).valueChanges();
  }
}
