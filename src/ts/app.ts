import Cart from "./services/Cart";
import Coffee from "./domain/Coffee";

const cart = new Cart;
const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');

cart.add(columbia);
cart.add(rwanda);
cart.add(peru);

console.log(cart.items);