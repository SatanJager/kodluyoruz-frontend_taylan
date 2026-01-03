// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:
let price = 100
let tax = 0.18 // KDV Oranı
let priceTax = price * tax // KDV Tutarı
let total = price + priceTax //Toplam Fiyat
console.log(
    "Fiyat:", price, 
    "KDV Orani:", tax, 
    "KDV Tutari:", priceTax, 
    "Fiyat: ", total 
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber) // Number constructer ile string i number a çevirir
console.log(newNumber)
console.log("Number Constructor icine bilgi gonderildi:", Number("111"))

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)


let numTry = 700;
console.log("sayi eklenmeden önce:", numTry)
numTry += 20;
console.log("sayi -20- eklendikten sonra:", numTry)

// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
// çarpma bölme toplama çıkarma
console.log( 2 + 3 * 10) // 50 ???????????  --> 32 
console.log( (2 + 3) * 10) // 50 ??????????? --> parantex önceliği

// mod(kalan) alma %:
// sayi tek mi cift mi ???
console.log("3/2 işleminde kalan:", 3 % 2) // kalan 1
console.log("17/2 işleminde kalan:", 17 % 2) // 0 ise cift, 1 ise tek
console.log("10/2 işleminde kalan:", 10 % 2) // kalan 0

// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

console.log("Koli Kalan Urun Ornegi 2: ", 8 % 8)  //--> 0 kalan

// us alma **: üst alma için 2tane * işareti yanyana kullanılır
console.log(2 * 2 * 2 * 2)  // -->4 tane 2 çarpımı
console.log(2 ** 4)  //--> üst alma

// asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.9) )  // -> 1

// yukari yuvarlama islemi -> Math.ceil :
console.log("Yukari Yuvarlama:", Math.ceil(1.9) ) // -> 2

// yakina yuvarlama islemi -> Math.round :
console.log("Yakina Yuvarlama: ", Math.round(1.5) ) // 1.4 ->1, 1.5 ->