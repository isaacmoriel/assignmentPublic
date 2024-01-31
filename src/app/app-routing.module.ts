import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';

const routes: Routes = [
  {path:'',component:ShopItemListComponent},
  {path:'item/:id',component:ShopItemComponent},
  {path:'list',component:ShopItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
