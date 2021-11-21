import { Product } from './Product.js';

/**
 * класс Напиток
 */

export class Drink extends Product {
    static COLA = { tugric: 50, cal: 40, name: 'cola' };
    static COFFEE = { tugric: 80, cal: 20, name: 'coffee' };

    constructor(drinkType) {
        super(drinkType.name, drinkType.tugric, drinkType.cal);
    }
}
