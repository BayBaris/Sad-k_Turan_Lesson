let fName = "Barış";
let surname = "Karakaya";
let age = 77;
let city = "Manisa";

let message = "My name is " + fName + " adn surname is " + surname + "." + " I am living in " + city;

console.log(message);
message = `My name is ${fName} and surname is ${surname}. I am living in ${city}.`;
console.log(message);

//tern operator

let retire = (65 - age > 0) ? `You have ${66 - age} years of retiring` : "You are retired! ";

message = `My name is ${fName} and surname is ${surname}. I am living in ${city}. ${retire}`;
console.log(message);


