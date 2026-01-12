// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


let firstName = "Lorem"

function greetings(firstName="", lastName="") { // default parametre aliyor..
    // console.log(`Merhaba ${firstName ? firstName : ""}`) // --> firstName varsa göster yoksa boşgöster
    // console.log(`Merhaba ${firstName}`) // -->firstName göster
    console.log(`Merhaba ${firstName} ${lastName}`)
} 

console.log(firstName) // degisken bilgisi vard
greetings() // fonksiyona parametre gondermedik 
greetings("Parametre")  // fonksiyona parametre gönderdik



function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}



let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ?????  --> info ismini gloabalde önceden kullanmış olursak hata verecektir
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('info', greetings2("Lorem", "Ipsum") )

let htmlInfo = `<span style="color:red">Color REDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)



//1. Örnek

function toplama (a , b) {  // a ve b toplanacak iki sayıyı temsil eden fonksiyon parametreleri(girdileri)  
    var sonuc = a+b; // Fonksiyonda aldığımız parametrelerle yaptığımız işlem
	return sonuc;  	// Herhangi iki sayının toplamından elde edeceğimiz işlem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
 }   

 var donenSonuc = toplama(5,7); // 5 ve 7 değerlerini a ve b parametrelerine karşılık gelen argümanlar olarak düşünebiliriz.

 //2. Örnek Daire alanı A = π x r²

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.

function daireAlaniHesaplama (r) { // Fonksiyonumuz, r parametresini alıyor. 
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.


// Alıştırma

function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car ?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " what is your favorite author?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + "  how are you ?");
      };
      break;
  }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre","nodejs");

