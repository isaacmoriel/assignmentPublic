import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  cartList:any[]=[];
  itemsInCart:number = 0;

  constructor(
    private carService:CartService
  ) { 
  }

  ngOnInit() {
    this.carService.selectedItems$.subscribe(val => {
      
      this.itemsInCart = this.cartList.length;
      this.cartList.push(val);
    })
  }

}
