import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleData } from "./SimpleData";

export class ProductService implements IProductService{

    private dataSource : SimpleData;
    private products: Array<Product>;

    constructor() {
        this.dataSource = new SimpleData();
        this.products = new Array<Product>;
        this.dataSource.getProducts().forEach(p => this.products.push(p));
        
    }

    getByID(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
    }
    getProducts(): Array<Product> {
        return this.products;
    }
    saveProduct(product: Product): void {
        // Yeni ekleme yapıldığı zaman
        if(product.id == 0 || product.id == null){
            product.id = this.generateId();
            this.products.push(product);
        }
        //Güncelleme işlemi yapıldığı zaman
        else{
            let index;

            for(let i = 0; i < this.products.length; i++){
                if(this.products[i].id === product.id){
                    index = i;
                }
            }

            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index > 0){
            this.products.splice(index,1);
        }
    }

    private generateId() : number{
        let key = 1;

        while(this.getByID(key) != null){
            key++;
        }

        return key;
    }
}