/**
 * Класс, описывающий заказ
 * 
 * @item единица товара
 * @totalPrice конечная цена
 * @totalCal количество калорий всего
 */

export class Order {
    constructor() {
        this.productsList = [];
        this.paid = false;
    }

    addItem(item) {
        if (this.paid) {
            console.log("Sorry, you can't change this order");
            return;
        }
        this.productsList.push(item);
    }

    removeItem(item) {
        if (this.paid) {
            console.log("Sorry, you can't change this order");
            return;
        }
        if (this.productsList.includes(item)) {
            this.productsList = this.productsList.filter(prod => prod !== item);
        } else {
            console.log("Sorry, this order does not contain such item");
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

    markOrderAsPaid() {
        this.paid = true;
    }
}