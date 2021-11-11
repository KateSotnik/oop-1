import { Order } from "./Order.js";
import { Drink }  from "./Drink.js";
import { Hamburger } from "./Hamburger.js";
import { Salad } from "./Salad.js";

const drinkCola = new Drink(Drink.COLA);

const hamSmall = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

const saladOlivier = new Salad(250, Salad.OLIVIER);

const order = new Order();

order.addItem(drinkCola);
order.addItem(hamSmall);
order.addItem(saladOlivier);
console.log(order);

order.removeItem(saladOlivier);
console.log(order);
console.log(order.removeItem(saladOlivier)); //Sorry, this order does not contain such item


order.orderPaid();
console.log(order.addItem(drinkCola)); //'Sorry, you can't change this order'

console.log(order.getTotalPrice());
console.log(order.getTotalCalories());



