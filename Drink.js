import { Product } from './Product.js';
/**
 * класс Напиток
 */

export class Drink extends Product {
static COLA = { tugric: 50, cal: 40, name: 'cola'};
static COFFEE = { tugric: 80, cal: 20, name: 'coffee'};

constructor(drink_type){
    super (null, drink_type.name, drink_type.tugric, drink_type.cal);
}
}
