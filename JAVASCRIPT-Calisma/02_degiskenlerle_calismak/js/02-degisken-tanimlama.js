// ********** let ve const ile Degisken Tanimlama ********** 

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:
let password = 1234; // --> sayı
console.log(password)

let taylan = "1234 ben bir stringim"
console.log(taylan)

// degisken atamasi yapmadan once kullanmaya calismak:

/* HATALI KULLANIM:  -->  değişken tanımlanmadan önce soruluyor
console.log(fullName)   
let fullName = "Hakan Yalcinkaya";
*/
let fullName = "Hakan Yalcinkaya";

let newUser = "Taylan Alp";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum Dolor"
console.log(fullName)

console.log(newUser)

// birlestirme veya ekleme islemi
newUser + "Mühür";
console.log(newUser)  // --> böyle eklenmiyor

fullName + "Yeni Eklenen Bilgi" // acaba eklendimi ??
console.log(fullName + " Test Bilgisi") // Ekle ve Goster ama Degiskene Eklemedik


fullName = fullName + " Yeni Bilgi"
console.log(fullName)

fullName =  "2: Bilgi : " + fullName
console.log(fullName)

newUser = newUser + " Mühür";
console.log(newUser) 


fullName = "Sifirlandi"
console.log(fullName)
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "oisjefo9jwes221"
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)

// !!!! const boş tanımlama yapılamaz ve sonradan değiştirilemez.