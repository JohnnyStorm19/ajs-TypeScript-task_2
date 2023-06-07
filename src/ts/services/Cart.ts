import Buyable from "../domain/Buyable";

export default class Cart {
    _items: Buyable[] = [];
    add(item: Buyable): void {
        this._items.push(item);
    }
    get items(): Buyable[] {
        return [...this._items];
    }
    getOverallPrice(): number {
        return this._items.reduce((acc: number, item: Buyable) => acc += item.price, 0);
    }
    getPriceWithDiscount(discount: number): number {
        const overallPrice = this.getOverallPrice();
        return overallPrice - (discount / 100 * overallPrice);
    }
    deleteItemFromCart(id: number): void {
        const index = this._items.findIndex((item: Buyable): boolean => item.id === id);
        if(index != -1) {
            this._items.splice(index, 1);
            return;
        }
        throw new Error('В корзине отсутствует товар по данному id');
    }
}