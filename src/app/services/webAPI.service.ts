import { Injectable } from '@angular/core';
import { ItemData } from '../MockedData/ItemData';
import { ShopItem } from '../Models/ShopItem';

@Injectable()
export class WebAPIService {

constructor() { }

mockedData:ItemData = new ItemData;
    

    public getItem(id:number ):ShopItem{
        if(id == 0)
        throw console.error('Id in getItem should not be 0');
        
        //TODO: replace later line with service calling web api
        var item = this.mockedData.List.find(item => item.Id == id);

        if(item == undefined)
        throw console.error('Item not found')
        
        return item;
    }

    public getItemList():ShopItem[]{
        //TODO: replace later line with service calling web api
        return this.mockedData.List;
    }
}
