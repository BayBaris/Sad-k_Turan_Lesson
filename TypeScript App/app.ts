import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;


result = _productService.getProducts();
result = _productService.getByID(2);

let p = new Product();

p.id = 2;
p.name = "Iphone 12";
p.category = "IOS";
p.price = 5000;

_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);
