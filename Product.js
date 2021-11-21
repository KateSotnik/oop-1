/**
   * Исходный класс для всех объектов
   * 
   * @constructor
   * @param type Название продукта
   * @param price  Цена
   * @param cal    Калорийность
   * 
   */
  
export class Product {
    constructor(productName, price, cal) {
        this.type = productName;
        this.price = price;
        this.cal = cal;
    }
    getType() {
        return this.type;
    }

    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.cal;
    }
}