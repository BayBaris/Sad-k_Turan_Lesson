//Model-View-Controller

import Search from "./models/Search";

const state = {};

const searchController = async () => {
    const keyword = document.getElementById("txt-keyword").value;

    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();

        
    }
    else{
        alert("Anahtar Kelime Girmelisiniz!")
    }
};

document.getElementById("form-search").addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
    console.log("form submitted!");
});