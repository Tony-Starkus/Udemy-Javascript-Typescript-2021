/**
 * Módulos de alto nível não devem depender de módulos de baixo nível.
 * Ambos devem depender de abstrações.
 *
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';
// import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const discount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('a', 'b', 'c');
const order = new Order(shoppingCart, messaging, persistency, customer);

// class MessagingMock implements MessagingProtocol {
//   sendMessage(msg: string): void {
//     console.log('A mensagem foi enviada pelo MOCK');
//   }
// }
// const messagingMock = new MessagingMock();

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
