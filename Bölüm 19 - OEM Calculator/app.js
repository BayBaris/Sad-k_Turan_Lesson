/*
    Barış Karakaya
    -> OEM Calculator v0.1
    -> All Controllers in same place.
                                        -> Created by Sadık Turan
*/
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
            {id: 0, name: "Monitor", price: 1000},
            {id: 1, name: "Keyboard", price: 400},
            {id: 2, name: "Mouse", price: 300},
            {id: 3, name: "Ram", price: 50}

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
const UIController = (function(){
    
        const Selectors = {
            productList: "#item-list" 
        }
        return{
            createProductList : function(products){
                let html = "";

                products.forEach(product => {
                    html+=`
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}$</td>
                        <td class="text-end">
                            <button type="submit" class="btn btn-warning btn-sm"><i class="far fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                    `;
                });

                document.querySelector(Selectors.productList).innerHTML = html;
            },
            getSelectors : function(){
                return Selectors;
            }
        }
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