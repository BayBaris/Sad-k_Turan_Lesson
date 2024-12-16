//Tek tip olarak tanımlama 
let products = ["Iphone 14", "Iphone 14 Pro", "Iphone 14 Pro Max"];
let prices = [20000, 25000, 35000];
let colors = ["Gold", "White", "Rose Gold"];

//Farklı şekillerde tanımlamalar yapılabilir.
let product1 = ["Iphone 14", "Gold", 20000];
let product2 = [
    "Iphone 14 Pro", 
    ["White", "Blue", "Black"], 
    25000
];
let product3 = [];
product3[0] = "Iphone 14 Pro Max";
product3[1] = "Rose Gold";
product3[2] =  35000;

console.log(products[0]);
console.log(product2[1]);
console.log(product2[0] + " " + product2[1][1]); //2 Boyutlu Dizi'de elemana erişim.

let courseName = "Web Developer Teaching Course";
console.log(courseName.split(" "));
