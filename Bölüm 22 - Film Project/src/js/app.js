//Model-View-Controller

import Search from "./models/Search";
import {elements} from "./base";
import * as srcView from "./views/SearchView";
import { Movie } from "./models/Movie";

const state = {};

// SearchController
const searchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();

        srcView.clearInput();
        srcView.clearResult();
        srcView.displayResults(state.search.data)
    }
    else{
        alert("Anahtar Kelime Girmelisiniz!")
    }
};

elements.searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
    console.log("form submitted!");
});

//Movie Controller

const movie = new Movie(252291);
movie.GetMovie();
console.log(movie);
