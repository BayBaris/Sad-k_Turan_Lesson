//Model-View-Controller

import Search from "./models/Search";
import {elements, renderLoader, clearLoader} from "./base";
import * as srcView from "./views/SearchView";
import * as movieView from "./views/MovieView";
import { Movie } from "./models/Movie";

const state = {};

// SearchController
const searchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword){
        state.search = new Search(keyword);

        srcView.clearInput();
        srcView.clearResult();

        renderLoader(elements.movieListCard);
        await state.search.getResults();

        srcView.displayResults(keyword,state.search.data);
        setTimeout(() => {
            clearLoader(elements.movieListCard); 
        }, 1000);
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

        renderLoader(elements.movieDetailsCard);

        await state.movie.getMovie();
        movieView.backToTop();

        movieView.displayMovie(state.movie.data);
        setTimeout(() => {
            clearLoader(elements.movieDetailsCard); 
        }, 1000);
    }
}

window.addEventListener("hashchange", movieController);

elements.movieDetailsClose.addEventListener("click", movieView.closeDetails);