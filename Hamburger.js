export default Hamburger;
import Product from './Product.js';
/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
*/
class Hamburger extends Product(size, stuffing) {
    super(price, kkal) {
        price = this.price;
        kkal = this.kkal;
    }
    size = this.size;
    stuffing = this.stuffing;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = ...
Hamburger.SIZE_LARGE = ...
Hamburger.STUFFING_CHEESE = ...
Hamburger.STUFFING_SALAD = ...
Hamburger.STUFFING_POTATO = ...

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () ...

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () ...

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () ...

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () ...
