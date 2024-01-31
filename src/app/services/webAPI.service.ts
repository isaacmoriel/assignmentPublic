import { Injectable } from '@angular/core';
import { ItemData } from '../MockedData/ItemData';
import { ShopItem } from '../Models/ShopItem';

@Injectable()
export class WebAPIService {

constructor() { }

mockedData:ItemData = new ItemData;
    

    public getItem(id:number ):ShopItem{
        //bottom line replace with web api call
        return this.mockedData.List[id];
    }

    public getItemList():ShopItem[]{
        //bottom line replace with web api call
        return this.mockedData.List;
    }
}
