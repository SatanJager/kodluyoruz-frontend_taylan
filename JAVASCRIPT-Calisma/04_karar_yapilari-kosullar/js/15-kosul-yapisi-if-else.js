// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

if (username) {  // if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz ${username}`)
} else {
    console.log("bilgi yok")
}


//Alistirmalar

//1

var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
}
else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}


//2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:
//Şartlar:
// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.


var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}


//3.Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

var randomSayi = Math.floor(Math.random() * 10);  
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("1 ve 10 arasında bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}

