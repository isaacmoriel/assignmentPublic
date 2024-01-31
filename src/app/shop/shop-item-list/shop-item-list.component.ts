import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShopItem } from '../../Models/ShopItem';
import { WebAPIService } from '../../services/webAPI.service';

@Component({
  selector: 'app-shop-item-list',
  templateUrl: './shop-item-list.component.html',
  styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {

  constructor(
    public webService:WebAPIService,
    private router: Router) { }

  ItemList:ShopItem[]=[];

  ngOnInit() {
   
    this.ItemList = this.webService.getItemList();
  }

  navigateToDetails(item:ShopItem){
    console.log(item);
    this.router.navigate(['item'+'/'+item.Id]);
  }

}
