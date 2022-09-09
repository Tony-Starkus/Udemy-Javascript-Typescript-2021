/**
 * Interface segregation principle (Princípio da segregação de Interface)
 *
 * Os clientes não devem ser forçados a depender de interfaces que não utilizam
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const discount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('a', 'b', 'c');
const order = new Order(shoppingCart, messaging, persistency, customer);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
