import Cart from "../services/Cart";
import Coffee from "../domain/Coffee";

test('new cart should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});
test('Adding new items to cart.items', () => {
    const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
    const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
    const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');
    const cart = new Cart;
    cart.add(columbia);
    cart.add(rwanda);
    cart.add(peru);
    expect(cart.items).toEqual([
        {id: 1, name: 'Pitcher', price: 250, type: 'Arabica', country: 'Columbia'},
        {id: 2, name: 'Pitcher', price: 230, type: 'Robusta', country: 'Rwanda'},
        {id: 3, name: 'Pitcher', price: 270, type: 'Arabica', country: 'Peru'},
    ])
})
test('getting overall price', () => {
    const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
    const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
    const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');
    const cart = new Cart;
    cart.add(columbia);
    cart.add(rwanda);
    cart.add(peru);
    expect(cart.getOverallPrice()).toBe(750);
});
test('getting overall price with empty cart', () => {
    const cart = new Cart;
    expect(cart.getOverallPrice()).toBe(0);
});
test('getting price with discount', () => {
    const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
    const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
    const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');
    const cart = new Cart;
    cart.add(columbia);
    cart.add(rwanda);
    cart.add(peru);
    expect(cart.getPriceWithDiscount(20)).toBe(600);
});
test('delete item from cart', () => {
    const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
    const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
    const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');
    const cart = new Cart;
    cart.add(columbia);
    cart.add(rwanda);
    cart.add(peru);
    cart.deleteItemFromCart(3);
    expect(cart.items).toEqual([
        {id: 1, name: 'Pitcher', price: 250, type: 'Arabica', country: 'Columbia'},
        {id: 2, name: 'Pitcher', price: 230, type: 'Robusta', country: 'Rwanda'},
    ])
});
test('throwing an error when id does not exist', () => {
    const columbia = new Coffee(1, 'Pitcher', 250, 'Arabica', 'Columbia');
    const rwanda = new Coffee(2, 'Pitcher', 230, 'Robusta', 'Rwanda');
    const peru = new Coffee(3, 'Pitcher', 270, 'Arabica', 'Peru');
    const cart = new Cart;
    cart.add(columbia);
    cart.add(rwanda);
    cart.add(peru);
    expect(() => {
        cart.deleteItemFromCart(5);
    }).toThrow('В корзине отсутствует товар по данному id')

});