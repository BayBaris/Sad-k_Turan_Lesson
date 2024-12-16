// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazdıran bir fonksiyon yazınız.
console.log("=== Question 1 ===");
function printAgain(text, printCount){
    for (let i = 0; i < printCount; i++){
        console.log(text);
    }
}
printAgain("Merhaba", 4);

// Dikdörtgenin alan ve çevresini hesaplayan fonksiyon yazınız.
console.log("=== Question 2 ===");
function calculateAreaandPerimeter(width, height){
    let area = width * height;
    let perimeter = (width + height) * 2;

    console.log(`Area of rectangle: ${area} \nPerimeter of rectangle: ${perimeter}`);
}
calculateAreaandPerimeter(12,5);

// Yazı Tura hesaplayan bir fonksiyon.

console.log("=== Question 3 ===");
function headOrTails(){
    let num = Math.random();
    num = Math.round(num);
    if (num == 0){
        console.log("Head");
    }
    else{
        console.log("Tail");
    }
}

headOrTails();

// Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon yazınız.
console.log("=== Question 4 ===");
function exacltyDivider(number){
    let dividers = [];
    for (let i = 2; i < number; i++){
        if(number % i == 0){
            dividers.push(i);
        }
    }
    return dividers
}

let list = exacltyDivider(12);
console.log(`${list}`);

// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
console.log("=== Question 5 ===");

// arguments, fonksiyona yolladığımız değerleri object içerisinde tutar.
// sum(1,2,3,4); => [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

function sum(){
    // console.log(arguments);
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

let x = sum(1,2,3,4);
let y = sum(1,2,3);
let z = sum(1,2,3,4,5,6,7);

console.log(`x= ${x} \ny= ${y} \nz= ${z}`);