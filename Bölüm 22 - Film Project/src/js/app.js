// api: 51d0a455ec41ceb8efe08834090a7854
// url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=51d0a455ec41ceb8efe08834090a7854&language=en-US&page=1&include_adult=false'




async function getResult(keyword){
    const apiKey = "51d0a455ec41ceb8efe08834090a7854";
    const baseURL = "https://api.themoviedb.org/3";

    const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&page=1&query=${keyword}`)
    const data = await response.json();
}

getResult("Ryan");