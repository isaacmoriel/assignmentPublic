import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShopItem } from '../Models/ShopItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

//stored value for selected item
private item$ = new BehaviorSubject<ShopItem>(new ShopItem);
selectedItems$ = this.item$.asObservable();

constructor() { }

setProduct(item: any) {
  if(item == undefined){
    //could show message, in meantime thow error
    throw console.error('Item to set coffee is empty')
  }
  
  this.item$.next(item);
}

}
