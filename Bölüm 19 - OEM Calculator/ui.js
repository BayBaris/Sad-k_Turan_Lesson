const UIController = (function(){
    
    const Selectors = {
        productList: "#item-list",
        productListItem: "#item-list tr",
        btnAdd: "#btnAdd",
        btnUpdate: "#btnUpdate",
        btnDelete: "#btnDelete",
        btnCancel: "#btnCancel",
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
        updateProduct : function(product){
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItem);
            items.forEach(item => {
                if(item.classList.contains("table-warning")){
                    item.children[1].textContent = product.name;
                    item.children[2].textContent = `${product.price}$`;

                }
            });
            return updatedItem
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        clearWarnings : function(){
            const items = document.querySelectorAll(Selectors.productListItem);
            items.forEach(item => {
                if(item.classList.contains("table-warning")){
                    item.classList.remove("table-warning");
                }
            });
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
        },
        addingState : function(item){
            if(item){
                item.classList.remove("table-warning")
            }
            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.btnAdd).style.display = "inline";
            document.querySelector(Selectors.btnUpdate).style.display = "none";
            document.querySelector(Selectors.btnDelete).style.display = "none";
            document.querySelector(Selectors.btnCancel).style.display = "none";
        },
        editingState : function(tr){
            tr.classList.add("table-warning");
            
            document.querySelector(Selectors.btnAdd).style.display = "none";
            document.querySelector(Selectors.btnUpdate).style.display = "inline";
            document.querySelector(Selectors.btnDelete).style.display = "inline";
            document.querySelector(Selectors.btnCancel).style.display = "inline";
        }
    }
})();
