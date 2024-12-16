/*
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içinde saklayınız.

        Öğrenci 1:
            İsim: Ada Bilgi
            Doğum Tarihi: 2012
            Notlar: 70, 70, 80

        Öğrenci 2:
            İsim: Yusuf Bilgi
            Doğum Tarihi: 2010
            Notlar: 40, 40, 50
    2- Yaş bilgilerini değişkende tutunuz.
    3- Ders ortalama notlarını değişkende tutunuz.
    4- 50 geçme notuna göre geçme durumlarını değişkende tutunuz. 
*/

let stu1Name = "Ada Bilgi";
let stu1Birth = "2012";
let stu1note1 = 70;
let stu1note2 = 70;
let stu1note3 = 80;
let stu1Avg = (stu1note1 + stu1note2 + stu1note3) / 3;
let isPassed1 = stu1Avg >= 50;

let stu2Name = "Ada Bilgi";
let stu2Birth = "2010";
let stu2note1 = 40;
let stu2note2 = 40;
let stu2note3 = 50;
let stu2Avg = (stu2note1 + stu2note2 + stu2note3) / 3;
let isPassed2 = stu2Avg >= 50;


let yearNow = new Date().getFullYear(); //Date sınıfından bir obje yarattık ve getFullYear methoduna erişim sağladık.

let stu1Age = yearNow - parseInt(stu1Birth); 
let stu2Age = yearNow - parseInt(stu2Birth);

console.log("=== Student 1 Info ===");
console.log(stu1Age);
console.log(parseFloat(stu1Avg));
console.log(isPassed1);
console.log("=== Student 2 Info ===");
console.log(stu2Age);
console.log(parseFloat(stu2Avg));
console.log(isPassed2);

