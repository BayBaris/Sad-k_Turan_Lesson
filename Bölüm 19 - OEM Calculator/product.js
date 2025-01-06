// Product Controller
const ProductController = (function(){
    // private
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [],
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
        },

        getProductByID : function(id){
            let _product = null;

            data.products.forEach(product => {
                if(product.id == id) _product = product;
            });

            return _product;
        },

        setCurrentProduct : function(product){
            data.selectedProduct = product;
        },

        getCurrentProduct : function(){
            return data.selectedProduct;
        },

        addProduct : function(name, price){
            let id;
            
            if(data.products.length > 0){
                id = data.products[data.products.length - 1].id + 1
            }
            else{
                id = 0;
            }
            
            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);

            return newProduct;
        },
        getTotal : function(){
            let total = 0;

            data.products.forEach((item) => {
                total += item.price;
            })

            data.totalPrice = total;
            return data.totalPrice;
        }
    }
    
})();