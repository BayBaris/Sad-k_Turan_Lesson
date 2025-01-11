import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResult = () => {
    elements.movieList.innerHTML = '';
}

export const displayResults = (keyword, data) => {
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
        elements.movieListHeader.innerHTML = `Found ${data.total_results} for <i>${keyword}</i> Research`;
        elements.movieListCard.classList.remove("d-none");
        elements.movieList.insertAdjacentHTML("beforeend", html);
    });
}