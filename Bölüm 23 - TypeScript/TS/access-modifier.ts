interface Point {
    x:number;
    y:number;
}

interface Vehicle{
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..

    constructor(private location?: Point, private color?: string){

    }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this.location.x} - Y: ${this.location.y} konumundan X: ${point.x} - Y: ${point.y} konumuna gidiyor.`)
    }
}

let taxi1 = new Taxi({x:2, y:4});
taxi1.travelTo({x:5, y:10});


