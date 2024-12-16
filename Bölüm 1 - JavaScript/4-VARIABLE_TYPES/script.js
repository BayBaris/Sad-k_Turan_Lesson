var string = "Barış Karakaya"; // string
let numberOne = 123132; // number


console.log(typeof string);
console.log(typeof numberOne);

var num1 = "10";
var num2 = "20";
var num3 = 30;
var num4 = 40;

console.log("str => int");
console.log(num1 + num2);
console.log(Number(num1) + Number(num2));
console.log("int => str");
console.log(num3 + num4);
console.log(num3.toString() + num4.toString());

let score = 50;
let isOk = (score >= 50);

console.log(isOk);
console.log(typeof isOk);

let age;

console.log(age);
console.log(typeof age);

/**
 * When to Use var, let, or const?
1. Always declare variable.
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
 */