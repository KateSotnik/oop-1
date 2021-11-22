import { Product } from './Product.js';
/**
 * класс Салат
 * @param weight вес салата
 * @param type вид салата
 * @param perWeight размер порции
 */

export class Salad extends Product {
    static CAESAR = { tugric: 100, cal: 20, name: "caesar" };
    static OLIVIER = { tugric: 50, cal: 80, name: "olivier" };
    static PER_WEIGHT = 100;

    constructor(weight, type) {
        let totalPrice = (type.tugric * weight) / Salad.PER_WEIGHT;
        let totalCal = (type.cal * weight) / Salad.PER_WEIGHT;
        super(type.name, totalPrice, totalCal);
        this.weight = weight;
    }
    getWeight () {
        return this.weight;
    }
}
