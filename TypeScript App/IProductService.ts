import { Product } from "./Product";

export interface IProductService{
    getByID(id:number) : Product;
    getProducts() : Array<Product>;
    saveProduct(product: Product) : void;
    deleteProduct(product: Product) : void;
}