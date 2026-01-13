// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
let email = "hakanyalcinkaya@gmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..




// consolda dene: --> lokal olarak yani o sayfada tutar  İncele --> Application --> LocalStorage
localStorage.setItem("myCat", "Keddy"); // kaydetmek
localStorage.getItem("myCat") // çağırmak



// Set
// window.localStorage.setItem("key","value");
// Get
// window.localStorage.getItem("key");
// LocalStorage verilerini silmek
// localStorage.removeItem("key"); // --> key olan objeyi LocalStorage'dan siler
// localStorage.clear(); --> bütün localstorage i siler

