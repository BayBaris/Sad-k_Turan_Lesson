"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleData_1 = require("./SimpleData");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleData_1.SimpleData();
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getByID = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        // Yeni ekleme yapıldığı zaman
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        //Güncelleme işlemi yapıldığı zaman
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getByID(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
