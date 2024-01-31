import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  cartList:any[]=[];
  itemsInCart:number = 0;

  title:string = '';
  showBackButton = true;

  constructor(
    private carService: CartService,
    private toolbarService: ToolbarService
  ) { 
  }

  ngOnInit() {
    this.carService.selectedItems$.subscribe(val => {
      
      this.itemsInCart = this.cartList.length;
      this.cartList.push(val);
    })

    this.toolbarService.getTitle$.subscribe(val => {
      this.title = val;
    })

    this.toolbarService.getShowHomePageBackBtn$.subscribe( val =>{
      this.showBackButton = val;
    })
  }

}
