import { Product } from './Product.js';
/**
 * класс Салат
 * @param
 * @weight вес салата
 * @type вид салата
 */

export class Salad extends Product {
    static CAESAR = { tugric: 100, cal: 20, name: "caesar" };
    static OLIVIER = { tugric: 50, cal: 80, name: "olivier" };

    constructor (weight, type) {
        const perWeight = 100
        let totalPrice = (type.tugric * weight) / perWeight
        let totalCal = (type.cal * weight) / perWeight
        super(weight, type.name, totalPrice, totalCal)

    }
}

