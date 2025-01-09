export default class Search{
    constructor(keyword){
        this.keyword = keyword
    }

    async getResults(){
        const apiKey = "51d0a455ec41ceb8efe08834090a7854";
        const baseURL = "https://api.themoviedb.org/3";
    
        const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&page=1&query=${this.keyword}`)
        this.data = await response.json();
    }
}