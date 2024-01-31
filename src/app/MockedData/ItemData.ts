import { ShopItem } from "../Models/ShopItem";

//Only used to Mocked Data;
export class ItemData {
    public List:ShopItem[] = [
        {
            Id:1,
            Name:'Americano',
            Description:'',
            Price:5,
            Image:'assets/Cappuccino.jpg'
        },
        {
            Id:2,
            Name:'Mocha',
            Description:'a',
            Price:6,
            Image:'assets/mocha.jpg'
        },
        {
            Id:3,
            Name:'Macchiato',
            Description:'b',
            Price:8.40,
            Image:'assets/Cappuccino.jpg'
        },
        {
            Id:4,
            Name:'Flat White',
            Description:'c',
            Price:6.5,
            Image:'assets/cafewhite.jpg'
        },
        {
            Id:5,
            Name:'Cappuccino',
            Description:'d',
            Price:9.10,
            Image:'assets/Cappuccino.jpg'
        },
]
}