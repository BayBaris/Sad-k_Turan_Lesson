/* 
    1) "Elma, Armut, Muz, Çilek" elemanlarına sahip dizi oluşturun.
    2) Dizi kaç elemanlıdır?
    3) İlk ve Son elemanı nedir?
    4) Elma dizinin bir elemanı mıdır?
    5) Kiraz meyvesini listenin sonuna ekleyiniz.
    6) Dizinin son 2 elemanını siliniz.
    
*/
/*
let fruits = [
    "Elma",
    "Armut",
    "Muz",
    "Çilek"
]
let result;

result = fruits.length;
console.log("Array Length: " + result);
result = fruits[0];
console.log("First Element: " + result);
result = fruits[fruits.length - 1];
console.log("Last Element: " + result);

result = fruits.includes("Elma");
console.log("Includes Elma: " + result);
result = fruits.push("Kiraz");
console.log(fruits);

result = fruits.splice((fruits.length - 1) - 1 , 2);
console.log(fruits);
*/

/* 
    7) Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız:
        
        Öğrenci 1 => Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2 => Ada Bilgi 2012 (80,80,90)
        Öğrenci 3 => Ahmet Turan 2009 (60,60,70)
*/

let stu1 = ["Yiğit Bilgi", 2010, [70,60,80]];
let stu2 = ["Ada Bilgi", 2012, [80,80,90]];
let stu3 = ["Ahmet Turan", 2009, [60,60,70]];

let students = [stu1, stu2, stu3];

let now = new Date();
let yearNow = now.getFullYear();

let ageYigit = yearNow - students[0][1];
let ageAda = yearNow - students[1][1];
let ageAhmet = yearNow - students[2][1];

console.log(`Yiğit'in Yaşı: ${ageYigit} \nAda'nın Yaşı: ${ageAda} \nAhmet'in Yaşı: ${ageAhmet}`);

let noteYigit = Math.round((students[0][2][0] + students[0][2][1] + students[0][2][2]) / 3);
let noteAda = Math.round((students[1][2][0] + students[1][2][1] + students[1][2][2]) / 3);
let noteAhmet = Math.round((students[2][2][0] + students[2][2][1] + students[2][2][2]) / 3);

console.log(`Yiğit'in Not Ortalaması: ${noteYigit} \nAda'nın Not Ortalaması: ${noteAda} \nAhmet'in Not Ortalaması: ${noteAhmet}`);
