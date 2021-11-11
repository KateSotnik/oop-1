
/**
 * Класс, описывающий заказ
 * 
 * @item единица товара
 * @totalPrice конечная цена
 * @totalCal количество калорий всего
 */

export class Order {
    constructor(productsList, paid) {
        this.productsList = [];
        this.paid = false;
    }
    addItem(item) {
        if (this.paid) {
            return "Sorry, you can't change this order";
        }
        this.productsList.push(item);
    }
    removeItem(item) {
        if (this.paid) {
            return "Sorry, you can't change this order";
        }
        for (let i = 0; i < this.productsList.length; i++) {
            if (this.productsList[i] === item) {
                this.productsList.splice(this.productsList.indexOf(item), 1);
            }
        }
    }
    getTotalPrice() {
        let totalPrice = 0;
        this.productsList.forEach(product => {
            totalPrice += product.price;
        })
        return totalPrice;
    }
    getTotalCalories() {
        let totalCalories = 0;
        this.productsList.forEach(product => {
            totalCalories += product.cal;
        })
        return totalCalories;
    }
    orderPaid() {
        this.paid = true;
    }
}


