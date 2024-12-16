/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let orders = [
{
    "orderID" : 101,
    "orderDate" : 2022-12-31,
    "paymentMethod" : "kredi kartı",
    "shippingAddress": {
        "neighbourhood" : "Yahya Kaptan",
        "district" : "İzmit",
        "city" : "Kocaeli"
    },
    "products" : {
        "5":{
            "productTitle" : "IPhone 13 Pro",
            "productURL" : "http://abc.com/iphone-13-pro",
            "productPrice" : 22000
        },
        "6":{
            "productTitle" : "IPhone 13 Pro Max",
            "productURL" : "http://abc.com/iphone-13-pro-max",
            "productPrice" : 25000
        }
    }
},
{
    "orderID" : 102,
    "orderDate" : 2022-12-30,
    "paymentMethod" : "Kredi Kartı",
    "shippingAddress": {
        "neighbourhood" : "Yahya Kaptan",
        "district" : "İzmit",
        "city" : "Kocaeli"
    },
    "products" : {
        "6" :{
            "productTitle" : "IPhone 13 Pro Max",
            "productURL" : "http://abc.com/iphone-13-pro-max",
            "productPrice" : 25000
        }
}
}
]


let order101 = (orders[0].products[5].productPrice + orders[0].products[6].productPrice) * 1.18;
let order102 = (orders[1].products[6].productPrice * 1.18)
let totalPrice = order101 + order102;

console.log("Order 1: " + order101);
console.log("Order 2: " + order102);
console.log("Total Order: " + totalPrice);
