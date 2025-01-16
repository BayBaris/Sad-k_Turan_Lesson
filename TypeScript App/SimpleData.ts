import { Product } from "./Product";

export class SimpleData{
    private products: Array<Product>;

    /**
     *
     */
    constructor() {
        this.products = new Array<Product>(
            new Product(1,"S20", "Android", 1000),
            new Product(2,"S21", "Android", 2000),
            new Product(3,"S22", "Android", 3000),
            new Product(4,"S23", "Android", 4000)
        );
    }

    getProducts() : Product[]{
        return this.products
    }
}