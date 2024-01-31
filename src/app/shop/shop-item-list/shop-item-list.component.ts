import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShopItem } from '../../Models/ShopItem';
import { WebAPIService } from '../../services/webAPI.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-shop-item-list',
  templateUrl: './shop-item-list.component.html',
  styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {

  constructor(
    public webService:WebAPIService,
    private toolbarService: ToolbarService,
    private router: Router) { }

  cafeList:ShopItem[]=[];

  ngOnInit() {
   
    this.cafeList = this.webService.getItemList();
    this.toolbarService.setTitle('CaFe List');
    this.toolbarService.setHomePageBackBtn(false);
  }

  navigateToDetails(cafe:ShopItem){
    if(cafe == undefined || cafe.Id == 0){
      //send error message in the meantime throw error
      throw console.error('item select is empty or has Id 0');
      
    }
    //navigate to detail page
    this.router.navigate(['item'+'/'+cafe.Id]);
  }

}
