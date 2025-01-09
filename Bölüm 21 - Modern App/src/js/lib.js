//private members ...
const PI = 3.1428;

//public members...
export function sum(...numbers) {
    return numbers.reduce((number, total) => total + number);
};


export function multiple(...numbers){
    return numbers.reduce((number, total) => total * number);
}

//ES6

sum(3,2,34)