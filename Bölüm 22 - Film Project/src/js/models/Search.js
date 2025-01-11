import * as Config from "../config";

export default class Search{
    constructor(keyword){
        this.keyword = keyword
    }

    async getResults(){
        const response = await fetch(`${Config.baseURL}/search/movie?api_key=${Config.apiKey}&page=1&query=${this.keyword}`)
        this.data = await response.json();
    }
}