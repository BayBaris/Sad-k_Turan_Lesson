// UI Controller
const UIController = (function(){
    
    const Selectors = {
        productList: "#item-list",
        btnAdd: "#btnAdd",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard : "#productCard",
        totalTL : "#total-tl",
        totalDollar : "#total-dolar"
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
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors : function(){
            return Selectors;
        },
        addProduct : function(product){
            document.querySelector(Selectors.productCard).style.display = "block";
            var html = `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price.toFixed(2)}$</td>
                    <td class="text-end">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
                `;

            document.querySelector(Selectors.productList).innerHTML += html;
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = (total * 35.3).toFixed(2);
        },
        addProductToForm : function(){
            const selected = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selected.name;
            document.querySelector(Selectors.productPrice).value = selected.price;
        }
    }
})();
