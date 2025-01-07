/*
    Barış Karakaya
    -> OEM Calculator v0.1
    -> All Controllers in same place.
                                        -> Created by Sadık Turan
*/

const AppController = (function (ProductCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners...

    const loadEventListeners = function () {
        // Add Product Event
        document.querySelector(UISelectors.btnAdd).addEventListener("click", productAddSubmit);

        // Edit Product Click Event
        document.querySelector(UISelectors.productList).addEventListener("click", productEditClick);

        // Edit Product Submit Event
        document.querySelector(UISelectors.btnUpdate).addEventListener("click", productEditSubmit);

        // Cancel Click
        document.querySelector(UISelectors.btnCancel).addEventListener("click", cancelUpdate)
    };

    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            //Add New Product...
            const newProduct = ProductCtrl.addProduct(productName, productPrice);
            //Add Product to List...
            UICtrl.addProduct(newProduct);
            //Clear All Inputs...
            UICtrl.clearInputs();
            //Get Total Price...
            const total = ProductCtrl.getTotal();
            //Show Total on UI...
            UICtrl.showTotal(total);
            //Clear Inputs
            UICtrl.clearInputs();
        }

        console.log(productName, productPrice)
        e.preventDefault();
    };
    const productEditClick = function (e) {

        if (e.target.classList.contains("edit-product")) {
            // console.log(e.target.parentNode.parentNode.children[0].textContent);
            const id = e.target.parentNode.parentNode.children[0].textContent;

            // Get Selected Product
            const product = ProductCtrl.getProductByID(id);

            // Set Current Product
            ProductCtrl.setCurrentProduct(product);

            //Add Product to UI
            UICtrl.addProductToForm();
            UICtrl.editingState(e.target.parentNode.parentNode);

        }


        e.preventDefault();
    };
    const productEditSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            //Update Product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            //Update UI
            let item = UICtrl.updateProduct(updatedProduct);

            //Get Total Price...
            const total = ProductCtrl.getTotal();
            //Show Total on UI...
            UICtrl.showTotal(total);

            UICtrl.addingState();
        }
        e.preventDefault();
    }
    const cancelUpdate = function(e){
        
        UICtrl.addingState();
        UICtrl.clearWarnings();
        e.preventDefault()
    }
    return {
        init: function () {
            console.log("App Starting...");

            UICtrl.addingState();
            const products = ProductCtrl.getProducts();

            (products.length === 0) ? UICtrl.hideCard() : UICtrl.createProductList(products);

            //Initializing event loading section.
            loadEventListeners();
        }
    }

})(ProductController, UIController);

AppController.init();