
export const elements = {
    searchForm: document.getElementById("form-search"),
    searchInput: document.getElementById("txt-keyword"),
    movieDetails: document.getElementById("movie-details"),
    movieDetailsCard: document.getElementById("movie-details-container"),
    movieDetailsClose: document.getElementById("movie-details-close"),
    movieList: document.getElementById("movie-list"),
    movieListCard: document.getElementById("movie-list-container"),
    movieListHeader : document.getElementById("movie-list-header")

}

export const renderLoader = parent => {
    const loader = `
    <div class="flexbox">
            <div class="dot-loader"></div>
            <div class="dot-loader dot-loader--2"></div>
            <div class="dot-loader dot-loader--3"></div>
        </div>
        `;
    parent.insertAdjacentHTML("beforebegin",loader);
}

export const clearLoader = parent => {
    const loader = parent.previousElementSibling;
    console.log(loader);
    if(loader){
        loader.parentNode.removeChild(loader);
    }
}

export const imageSizes = {
    backdrop_sizes: [
        "w300",
        "w780",
        "w1280",
        "original"
    ],
    logo_sizes: [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
    ],
    poster_sizes: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
    ],
    profile_sizes: [
        "w45",
        "w185",
        "h632",
        "original"
    ],
    still_sizes: [
        "w92",
        "w185",
        "w300",
        "original"
    ]
}