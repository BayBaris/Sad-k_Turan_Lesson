/*
    Barış Karakaya
    -> OEM Calculator v0.1
    -> All Controllers in same place.
                                        -> Created by Sadık Turan
*/

// App Controller
const AppController = (function(ProductCtrl, UICtrl){

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners...
    
    const loadEventListeners = function(){
        document.querySelector(UISelectors.btnAdd).addEventListener("click", productAddSubmit)
    };

    const productAddSubmit = function(e){
        
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== "" && productPrice !== ""){
            //Add New Product...
            const newProduct =  ProductCtrl.addProduct(productName, productPrice);
            //Add Product to List...
            UICtrl.addProduct(newProduct);
            //Clear All Inputs...
            UICtrl.clearInputs();
            //Get Total Price...
            const total = ProductCtrl.getTotal();
            console.log(total);
            //Show Total on UI...
            UICtrl.showTotal(total);
        }

        console.log(productName, productPrice)
        e.preventDefault();
    }

    return {
        init: function(){
            console.log("App Starting...");
            
            const products = ProductCtrl.getProducts();
            
            (products.length === 0) ? UICtrl.hideCard() : UICtrl.createProductList(products);

            //Initializing event loading section.
            loadEventListeners();
        }
    }
    
})(ProductController, UIController);

AppController.init();