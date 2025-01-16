"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleData = void 0;
var Product_1 = require("./Product");
var SimpleData = /** @class */ (function () {
    /**
     *
     */
    function SimpleData() {
        this.products = new Array(new Product_1.Product(1, "S20", "Android", 1000), new Product_1.Product(2, "S21", "Android", 2000), new Product_1.Product(3, "S22", "Android", 3000), new Product_1.Product(4, "S23", "Android", 4000));
    }
    SimpleData.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleData;
}());
exports.SimpleData = SimpleData;
