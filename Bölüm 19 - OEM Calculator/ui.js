// UI Controller
const UIController = (function(){
    
    const Selectors = {
        productList: "#item-list",
        btnAdd: "#btnAdd",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard : "#productCard"
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
        },
        addProduct : function(product){
            document.querySelector(Selectors.productCard).style.display = "block";
            var html = `
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

            document.querySelector(Selectors.productList).innerHTML += html;
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display = "none";
        }
    }
})();
