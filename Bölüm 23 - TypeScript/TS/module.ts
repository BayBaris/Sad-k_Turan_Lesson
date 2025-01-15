import { Taxi } from "./Taxi";
import { Bus } from "./Bus";

let taxi1 = new Taxi({x:2, y:4});
taxi1.travelTo({x:5, y:10});

let currentLocation = taxi1.location;
taxi1.location({x:12, y:5});

