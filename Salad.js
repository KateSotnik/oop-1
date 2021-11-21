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
    static perWeight = this.perWeight;

    constructor(weight, type, perWeight) {
        let totalPrice = (type.tugric * weight) / perWeight;
        let totalCal = (type.cal * weight) / perWeight;
        super(type.name, totalPrice, totalCal, weight, perWeight);
        this.weight = weight;
        this.perWeight = perWeight;
    }
}