var Taxi = /** @class */ (function () {
    //..
    function Taxi(location) {
        this.currentLocation = location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " => Y: ").concat(point.y, " Konumuna Gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs X: ".concat(point.x, " => Y: ").concat(point.y, " Konumuna Gidiyor."));
    };
    return Bus;
}());
var taxi1 = new Taxi({ x: 2, y: 5 });
taxi1.travelTo({ x: 1, y: 2 });
console.log(taxi1.currentLocation);
// let taxi2 = new Taxi();
// taxi1.travelTo({x:3, y:5});
// taxi1.currentLocation = {x:7, y:2};
var bus1 = new Bus();
