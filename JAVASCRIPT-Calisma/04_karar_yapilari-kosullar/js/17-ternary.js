// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("

//info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadı."}`

info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`


// Alıştırmalar
//1
let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue) >>
    false

console.log("boolean yazdır:", boolean) // --> undefined


//2
let age = 24;
let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

console.log("permission", permission); // --> Giriş Yapabilirsiniz

//3

let firstCity = "Ankara";
let secondCity = "İstanbul";

const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual);  // --> İki şehir aynı değil


//4

var money;
var canBuy =
    (money < 17) ? "Satın alamazsın.." :
    (money > 30) ? "Satın alabilirsin.." :
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy)  // -->  Para miktarını girmen gerekmektedir

