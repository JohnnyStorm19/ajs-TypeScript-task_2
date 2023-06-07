import Buyable from "./Buyable";

export default class Coffee implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly type: string;
    readonly country: string;
    
    constructor(id: number, name: string, price: number, type: string, country: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.country = country;
    }
}