const products = [
    {
        name: "Rice",
        price: "100₺"
    },
    {
        name: "Tomato Sauce",
        price: "126₺"
    },
    {
        name: "Hamburger",
        price: "290₺"
    }
]

var ProductController = (function(data){
    
    var collections = data || [];

    const addProduct = (product) =>{
        collections.push(product);
    }

    const removeProduct = (product) =>{
        var index = collections.indexOf(product);
        if(index>=0){
            collections.splice(index,1)
        }
    }

    const getProducts = function(){
        return collections;
    }

    return{
        addProduct,
        removeProduct,
        getProducts
    }
})(products); // Parametremizi buradan giriyoruz.

console.log(ProductController.getProducts());

// Module Extend
// Product Controller Modülünü bozmadan bu modülün üzerine yeni özellikler eklemiş oluyoruz.
// Aynı zamanda Üst Modüldeki fonksiyonlara da erişimimiz olmuş oluyor.
var Extented = (function(moduleName){
    moduleName.sayHello = function(){
        console.log("This is a Extented Module");
    }

    return moduleName;

})(ProductController || {})
Extented.sayHello();
console.log(Extented.getProducts());