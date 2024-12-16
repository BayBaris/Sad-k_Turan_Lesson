let now = new Date();

//Get Methods
result = now;
result = now.getDate();     //Tarihin gün bilgisini döndürür. (1/31)
result = now.getFullYear(); //Tarihin yıl bilgisini döndürür. (2024)
result = now.getDay();      //Tarihin gün bilgisini index olarak döndürür. (0: Pazar - 6: Cumartesi)
result = now.getHours();    //Tarihin saat bilgisini döndürür. (Yalnız Saat=>{15}:00:00)


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
result = days[now.getDay()];

console.log(result);
//Set Methods
now.setDate(12);
now.setMonth(8);            //Ay bilgisi index olarak tutulur. (0: Ocak - 11: Aralık)

result = now;

let birthday = new Date(2000,10,29);
result = now - birthday;

let milisecond = result;
let second = milisecond / 1000;
let minute = second / 60;
let hour = minute / 60;
let day = hour / 24;

result = Math.ceil(day);
console.log(result);