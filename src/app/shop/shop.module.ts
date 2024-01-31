import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopItemComponent } from './shop-item/shop-item.component';
import { SharedModule } from '../shared/shared.module';
import { ShopItemListComponent } from './shop-item-list/shop-item-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShopItemListComponent,
    ShopItemComponent]
})
export class ShopModule { }
