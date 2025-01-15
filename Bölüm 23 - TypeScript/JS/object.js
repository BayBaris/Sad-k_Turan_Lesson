var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi X: ".concat(point.x, " => Y: ").concat(point.y, " Konumuna Gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
    };
    return Bus;
}());
var taxi1 = new Taxi();
taxi1.travelTo({ x: 1, y: 2 });
taxi1.currentLocation = { x: 2, y: 5 };
console.log(taxi1.currentLocation.x);
console.log(taxi1.currentLocation.y);
