
/**
   * исходный класс для всех объектов
   * 
   * @constructor
   * @param size Размер, вес продукта
   * @param type Название продукта
   * @param price  Цена
   * @param cal    Калорийность
   * 
   */

export class Product {
    constructor(size, product_name, price, cal) {
        this.size = size;
        this.type = product_name;
        this.price = price;
        this.cal = cal;
    }

    getSize() {
        return this.size;
    }
    getType() {
        return this.type;
    }
    calculatePrice() {
        return this.price;
    }
    calculateCalories() {
        return this.cal;
    }
}