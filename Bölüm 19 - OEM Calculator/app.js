// Storage Controller
const StorageController = (function(){

})();

// Product Controller
const ProductController = (function(){
    // private
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [
            {id: 1, name: "Monitor", price: 1000},
            {id: 2, name: "Keyboard", price: 400},
            {id: 3, name: "Mouse", price: 300}
        ],
        selectedProduct : null,
        totalPrice : 0
    }
    return{
        //public
        getProducts : function(){
            return data.products;
        },
        
        getData : function(){
            return data;
        }
    }
    
})();

// UI Controller
const UIController = (function(products){
    
})();


// App Controller
const AppController = (function(ProcudCtrl, UICtrl){

    return {
        init: function(){
            console.log("App Starting...");
            const products = ProcudCtrl.getProducts();
            console.log(products);

            UICtrl.createProductList(products);
        }
    }
    
})(ProductController, UIController);


AppController.init();