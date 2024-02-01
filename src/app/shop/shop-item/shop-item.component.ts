import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

import { ShopItem } from '../../Models/ShopItem';
import { CartService } from '../../services/cart.service';
import { WebAPIService } from '../../services/webAPI.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  //the item/coffee for this component details
  public item:ShopItem = new ShopItem(); 

  //inject services and modules needed in this component
  constructor(
    private webapi: WebAPIService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private toolbarService: ToolbarService) { }

  ngOnInit() {   
    
    //get the Id passed from the url, to pass it to
    //the mocked web api service that will return 
    //the item details
     this.route.params.subscribe(params => {
      let id = params['id'];
      this.item = this.webapi.getItem(id);
      this.toolbarService.setTitle(this.item.Name)
      this.toolbarService.setHomePageBackBtn(true);
      });
      
  }

  addToCart(){
    
    if(this.item == undefined){
      //send message if item wasn't defined
      throw console.error('not a valid coffee item');
      
    }

    //call method is cart service to keep track of 
    //items being added to the card
    this.cartService.setProduct(this.item);
    //show snack bar
    this.snackBar.open("Added to Cart",
    "",
    {
      horizontalPosition: "start",
      verticalPosition: "bottom",
      duration: 1000,
    }
    )
  }

}
