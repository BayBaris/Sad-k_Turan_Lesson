//Model-View-Controller

import Search from "./models/Search";
import {elements} from "./base";
import * as srcView from "./views/SearchView";
import * as movieView from "./views/MovieView";
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

const movieController = async () =>{
    const id = window.location.hash.replace("#","");
    if (id){
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
}

window.addEventListener("hashchange", movieController)