interface Point {
    x:number;
    y:number;
}

interface Vehicle{
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    //..

    constructor(private _location?: Point, private _color?: string){

    }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this._location.x} - Y: ${this._location.y} konumundan X: ${point.x} - Y: ${point.y} konumuna gidiyor.`)
    }

    get location(){
        return this._location;
    }

    set location(value:Point){
        if(value.x < 0 || value.y < 0){
            throw new Error("Koordinat bilgileri negatif bir sayı olamaz!");
        }
        this._location = value;
    }
}

let taxi1 = new Taxi({x:2, y:4});
taxi1.travelTo({x:5, y:10});

let currentLocation = taxi1.location;
taxi1.location({x:12, y:5});

