import {Product} from './Product.js';
/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param burger      Вид бургера
* @param stuffing    Начинка
*/
export class Hamburger extends Product {
    static SIZE_SMALL = { tugric: 50, cal: 20, size: 'small' };
    static SIZE_LARGE = { tugric: 100, cal: 40, size: 'large' };

    static STUFFING_CHEESE = { tugric: 10, cal: 20, name: 'stuffing_cheese'};
    static STUFFING_SALAD = { tugric: 20, cal: 5, name: 'stuffing_salad' };
    static STUFFING_POTATO = { tugric: 15, cal: 10, name: 'stuffing_potato' };
    
    constructor(burger, stuffing){
       let totalPrice = burger.tugric + stuffing.tugric;
       let totalCalories = burger.cal + stuffing.cal;
        super (burger.size, stuffing.name, totalPrice, totalCalories);
    }
}
   
    
    
    
    
    
    
    
