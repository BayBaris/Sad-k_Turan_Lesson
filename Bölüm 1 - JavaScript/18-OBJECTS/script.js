//Dict ve JSON yapısına benzer bir yapıdadır.
/*
    - Object içerisinde array tanımlanabilir.
    - Arraylarin içerisindeki objelerin alt elemanlarına erişilebilir.
        - result = users[0].name;
    
 */
let userA = {
    "name" : "Barış",
    "surname" : "Karakaya",
    "age" : 24,
    "address" : {
        "city" : "Manisa",
        "district" : "Salihli"
    },
    "hobbies" : ["Badminton", "Drawing", "Playing Flute"]
}

let userB = {
    "name" : "Umut Can",
    "surname" : "Karaoğlan",
    "age" : 22,
    "address" : {
        "city" : "Manisa",
        "district" : "Salihli"
    },
    "hobbies" : ["Badminton", "Playing MIDI", "Cooking"]
}

let result;
let users = [
    userA,
    userB
]

result = userA.name;
result = userA["age"];
console.log("User A's Age: " + result);
result = userA.address.city;
result = userA.address.district;
console.log("User A's District Address: " + result);
result = userA.hobbies[0];
result = userA.hobbies[1];

result = users[0].name;

let products = [
    {
        "productName" : "Samsung Galaxy S24",
        "price" : 30000
    },
    {
        "productName" : "Samsung Galaxy S24 Ultra",
        "price" : 45000
    }
]

result = products[0].productName;
console.log("Product Name of Products' First Element: " + result);