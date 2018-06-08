//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor() {
    console.log('Hello FirebaseProvider Provider');
  }

  // getShoppingItems() {
  //   return this.afd.list('/shoppingItems/');

  // }
 
  // addItem(item_name,item_price,item_stock) {
  //   this.afd.list('/shoppingItems/').push({
  //     item_name:item_name,
  //     item_price:item_price,
  //     item_stock:item_stock});
  // }

  // updateItem(item_id,item_name,item_price,item_stock){
  
  //   this.afd.object('/shoppingItems/' + item_id)
  //   .update({  item_name:item_name,
  //     item_price:item_price,
  //     item_stock:item_stock });  
  //   }
 
  // removeItem(id) {
  //   this.afd.list('/shoppingItems/').remove(id);
  // }

  

}
