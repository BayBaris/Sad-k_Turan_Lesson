interface Point {
    x:number;
    y:number;
}

interface Vehicle{
    currentLocation : Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..

    constructor(location: Point, color?: string){
        this.currentLocation = location;
        if(typeof color !== "undefined") this.color = color;
    }
    color : string;
    currentLocation : Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} => Y: ${point.y} Konumuna Gidiyor.`)
    }
}

class Bus implements Vehicle {
    //..
    currentLocation : Point;
    travelTo(point: Point): void {
        console.log(`Otobüs X: ${point.x} => Y: ${point.y} Konumuna Gidiyor.`)
    }
}

let taxi1: Taxi = new Taxi({x:2, y:5}, "Red");
taxi1.travelTo({x:1, y:2});
console.log(taxi1.currentLocation);

let taxi2: Taxi = new Taxi({x:2, y:5});
