import * as Config from "../config";

export class Movie{
    constructor(id){
        this.id = id
    }

    async getMovie(){
        const response = await fetch(`${Config.baseURL}/movie/${this.id}?api_key=${Config.apiKey}`)
        this.data = await response.json();
    }
}