import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private item$ = new BehaviorSubject<any>({});
selectedItems$ = this.item$.asObservable();

constructor() { }

setProduct(item: any) {
  this.item$.next(item);
}

}
