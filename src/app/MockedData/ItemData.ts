import { ShopItem } from "../Models/ShopItem";

//Only used to Mocked Data;
export class ItemData {
    public List:ShopItem[] = [
        {
            Id:1,
            Name:'Americano',
            Description:`An americano is just water and espresso. It'll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, depending on the coffee shop in question or how you've chosen to brew it. Traditionally, there will be no milk but some people may add it depending on their personal preference`,
            Price:5,
            Image:'assets/Cappuccino.jpg'
        },
        {
            Id:2,
            Name:'Iced Coffee',
            Description:`Iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too.`,
            Price:6,
            Image:'assets/icedCoffee.jpg'
        },
        {
            Id:3,
            Name:'Affogato',
            Description:`More traditionally known as "affogato al caffè" (Italian for "drowned in coffee"), is an Italian coffee-based dessert. It usually takes the form of a scoop of plain milk-flavored (fior di latte) or vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso`,
            Price:8.40,
            Image:'assets/affogato.jpg'
        },
        {
            Id:4,
            Name:'Flat White',
            Description:`A blend of micro-foamed milk poured over a single or double shot of espresso. This microfoam is steamed milk infused with air, which creates tiny air bubbles, to create a smooth and velvety texture and creamy taste.`,
            Price:6.5,
            Image:'assets/cafewhite.jpg'
        },
        {
            Id:5,
            Name:'Cappuccino',
            Description:`The perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds. An expertly made cappuccino should be rich, but not acidic and have a mildly sweet flavouring from the milk.`,
            Price:9.10,
            Image:'assets/Cappuccino.jpg'
        },
]
}