var Taxi = /** @class */ (function () {
    //..
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this.location.x, " - Y: ").concat(this.location.y, " konumundan X: ").concat(point.x, " - Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi1 = new Taxi({ x: 2, y: 4 });
taxi1.travelTo({ x: 5, y: 10 });
