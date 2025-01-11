import {elements} from "../base";

export const clearInput = () =>{
    elements.searchInput.value = '';
}

export const clearResult = () =>{
    elements.searchResult.innerHTML = '';
}

export const displayResults = data => {
    data.results.forEach(movie => {
        const html = `
             <li class="mb-3">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <img src="https://media.themoviedb.org/t/p/w92/${movie.poster_path}.jpg" onerror="this.src='https://placehold.co/92x138';" alt="${movie.title}">
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <h5>
                        <span class="badge rounded-pill text-bg-warning">${movie.vote_average.toFixed(1)}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                        </h5>
                        <p>${movie.overview}</p>
                    </div>
                </div>
            </li>
        `;

        elements.searchResult.insertAdjacentHTML("beforeend",html);
    });
}