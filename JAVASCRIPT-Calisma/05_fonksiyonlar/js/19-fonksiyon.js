// ** Ilk Fonksiyonumuzu Tanimlamak:

function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}

hello() // calistir




// hata alabiliriz...  -->  fonksiyonun dışardan bağımlılığı var.
// function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }


// Alıştırmalar

// 1 - Asenkron çalışma

/* function printScreen1 (){ 
    console.log("İlk ekran çıktısı"); 
} 

function printScreen2 (){ 
    setTimeout(function(){ 
        console.log("İkinci ekran çıktısı") 
        }, 3000); 
} 

function printScreen3 (){ 
    console.log("Üçüncü ekran çıktısı"); 
}

printScreen1(); 
printScreen2(); 
printScreen3();  

// Çıktımız şu şekilde olacaktır:
// İlk ekran çıktısı
//Üçüncü ekran çıktısı
// İkinci ekran çıktısı

*/


//2 - Callback

function printScreen1() { 
    console.log("İlk ekran çıktısı"); 
} 

function printScreen2(callback1, callback2) { 
    setTimeout(function () { 
    callback1(); 
    console.log("İkinci ekran çıktısı") 
    callback2(); 
    }, 3000); 
} 

function printScreen3() { 
    console.log("Üçüncü ekran çıktısı"); 
} 

printScreen2(printScreen1, printScreen3); 


//3 

/* function mesajVer() 
{ alert( 'Herkese Merhabalar!' );
}
mesajVer(); 
mesajVer(); */


//4

function mesajVer(ad, soyad) { 
alert(`Merhaba ${ad} ${soyad}`); 
} 

mesajVer("Arturo", "Kelesoglu", "Mr."); 

/* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/ 


mesajVer("Arturo"); 
/* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */ 

mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.) 

//5 Function Expression

var ekle = function topla(sayi1, sayi2) { 
return sayi1 + sayi2; 
}; 
var sonuc1 = ekle(10,20); 
// var sonuc2 = topla(10,20); // geçersiz --> hata verir

console.log(sonuc1); // --> 30
//console.log(sonuc2);


//6 Arrow functions

const carpim = (sayi1, sayi2) => sayi1 * sayi2; 
/* 
// Daha uzun hali ise; const carpim = function(sayi1,sayi2){ return sayi1 * sayi2; } */ 

console.log(carpim(3, 5));  //--> 15

//Tek parametre alan fonsiyon
const karesiniAl = (sayi) => sayi * sayi;
//Hiç parametre olmadığı zaman ise
const helloWorld2 = () => console.log('Hello World');


let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();

// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
  let result = a + b;
  return result;
};

//7 Recursion

/* Direkt örnek vererek açıklamak gerekirse, yapmamız gereken bir task var diyelim ve biz bu task'i birden fazla parçaya ayırıp daha basit halde yazmak istersek veya bu task'ı aksiyon alacak bir fonksiyona ve bu task'i daha basit bir task'e dönüştürmek istersek veya belirli bir data yapısı ile ilgileniyorsak, recursion bu noktada bize yardımı dokunabilecek bir programlama pattern'idir diyebiliriz.

Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz. */

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8


//8 Variable Scope, Closure

/* Code Blocks
Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, o değişken sadece bu code block arasında ulaşılabilir olur. */

//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}
// console.log(message); // ??  ---> hata verir
//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}

{
  let message = 'Hello';
  console.log(message);
}
// Kod blokları kullanmadan da deneyebilirsiniz.

// If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.

if (true) {
  let message = 'Merhaba';
  console.log(message);
}
// console.log(message); // ? merhaba mı verir yoksa bir hata mı? --> Hata verir


//Nested Functions

function programDetayi(bootcamp, organizasyon) {
  // nested yardımcı fonk
  const tumProgram = () => bootcamp + ' ' + organizasyon;

  console.log('Basladi, ' + tumProgram());
  consol.log('Bitti, ' + tumProgram());
}


