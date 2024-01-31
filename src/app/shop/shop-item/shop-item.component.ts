import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

import { ShopItem } from '../../Models/ShopItem';
import { CartService } from '../../services/cart.service';
import { WebAPIService } from '../../services/webAPI.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  public item:ShopItem = new ShopItem(); 

  constructor(
    private webapi: WebAPIService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let id;
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('Id'));
     this.route.params.subscribe(params => {
      id = params['id'];
      this.item = this.webapi.getItem(id);
      console.log(JSON.stringify(this.item))
      });
    
  }

  addToCart(){
    this.cartService.setProduct({});
    this.snackBar.open("Added to Cart",
    "",
    {
      horizontalPosition: "start",
      verticalPosition: "top",
      duration: 3000
    }
    )
  }

}
