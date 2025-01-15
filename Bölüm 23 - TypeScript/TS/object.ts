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

let taxi1: Taxi = new Taxi();

taxi1.travelTo({x:1, y:2});
taxi1.currentLocation = {x:2, y:5};

console.log(taxi1.currentLocation.x);
console.log(taxi1.currentLocation.y);

let taxi2 = new Taxi();
taxi1.travelTo({x:3, y:5});
taxi1.currentLocation = {x:7, y:2};

let bus1 = new Bus();