// ********** Degisken Tanimlama Kurallari  ********** 
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

// ### Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:
let fullname  = "" // bu dogru kullanim degil :(
let kodluyoruzserverinfo = "" // bu dogru kullanim degil :(
let kodluyoruz_server_info = "" // bu dogru kullanim degil :(
let fullName = ""
let kodluyoruzServerInfo = "" // bu dogru :)
let kodluyoruzSERverInfo = "" // bu dogru kullanim degil :(

// let firstName = "Taylan", lastName = "Mühür"  --> kod okunurluğu için bu şekilde yazmayın!
let firstName = "Taylan"
let lastName = "Mühür"
console.log(firstName, lastName)

// UPPER_CASE Kullanimi: --> Değişmeyen const değişkenlerde kod okunurluğu için kullanılır.
const password = "1234" // bu dogru kullanim degil :(
const PASSWORD = "1234" // dogru kullanim
const SERVER_PASSWORD = "1234" // dogru kullanim

// degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = 'Türkçe Bilgi Yazdırılıyor..' // bu dogru kullanim degil :(
// let turkceBilgi // olmazzz :( --> Türkçe degisken isim kullanma!
let info = 'Türkçe Bilgi Yazdırılıyor..'
console.log(info)

// anlamsiz degisken adlari kullanmayin!
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
//When I wrote this, only God and I understood what I was doing
//Now, God only knows
let x = 1;  // bu dogru kullanim degil :(
// x, y, z, k, i, e, gibi anlamsiz degisken isimlerini kullanmayin!


// ### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi:
let isActive = true
let hasPassword = false

// 2: Line Length < 80
// yazılan kodun 80 karakter bir satırda olmalı