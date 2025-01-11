import * as Config from "../config";

export class Movie{
    constructor(id){
        this.id = id
    }

    async GetMovie(){
        const response = await fetch(`${Config.baseURL}/movie/${this.id}?api_key=${Config.apiKey}`)
        this.data = await response.json();
        console.log(this.data)
    }
}