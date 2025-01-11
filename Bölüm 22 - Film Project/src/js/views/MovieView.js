import {elements} from "../base";

export const backToTop = () => {
    window.scrollTo({top:0, behavior:"smooth"});
}

export const displayMovie = (data) => {
    var html = `<div class="row">`;
 
    var genres = "";

    data.genres.forEach(genre => {
        genres += `<span class="badge text-bg-danger mx-1">${genre.name}</span>`
    });

    html+= `
        <div class= "col-md-4">
            <img src="https://media.themoviedb.org/t/p/w500/${data.poster_path}.jpg" class="img-fluid mb-3" onerror="this.src='https://placehold.co/92x138';" alt="${data.title}">
        </div>
        <div class= "col-md-8">
            <div>
                <h5>${data.original_title}</h5>
                <p>${data.overview}</p>
                <p><small class="badge text-bg-warning">${data.vote_average.toFixed(1)}</small></p>
                <hr>
                ${genres}
        </div>
    `;

    html+= `</div>`;

    elements.movieDetailsCard.classList.remove("d-none");
    elements.movieDetails.innerHTML = html;
}

export const closeDetails = () => {
    elements.movieDetailsCard.classList.add("d-none");
}