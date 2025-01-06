// Singleton Pattern

var Singleton = (function(){
    var instance;

    const createInstance = function() {
        return {
            randomNumber : Math.random()
    }
}

    return {
        getInstance: function(){
            if(!instance){
                instance = new createInstance();
            }
            return instance;
        }
    }
})();


const sing1 = Singleton.getInstance();
const sing2 = Singleton.getInstance();

console.log(sing1.randomNumber, sing2.randomNumber);


var ProductSingleton = (function (){
    
    var instance;

    const ProductController = function(){
        const products = [
            {name: "A", price: 1000},
            {name: "B", price: 3444},
            {name: "C", price: 1223}
        ];

        const addProduct = (product) => {product.push(products);}

        const getAll = ()=>{return products;}

        return {addProduct, getAll}
    }

    return{
        getInstance : function(){
            return instance = (!instance) ? new ProductController() : instance;
        }
    }

})();


const productController1 = ProductSingleton.getInstance();
const productController2 = ProductSingleton.getInstance();

console.log(productController1);
console.log(productController1.getAll());