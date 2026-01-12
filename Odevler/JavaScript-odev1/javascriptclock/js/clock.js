// UserName'i alarak dökümana yazdırmak
const userName = document.querySelector("#myName")
userName.innerHTML = prompt("Lütfen Kullanıcı Adınınız Giriniz:")

// Tarih almak Date fonksiyonu

let clock = document.querySelector("#myClock") //gösterilecek yerin id'ni seçtim

const tarih = new Date()

//console.log(tarih.getDay());
// console.log(tarih)
// console.log(typeof tarih)  //object 
/* Bazı kullanılacak metotlar bilgi amaçlı
console.log(tarih.getDate());
console.log(tarih.getMonth()); // sıfırdan saymaya başlıyor
console.log(tarih.getFullYear());
console.log(tarih.getDay());  // haftanın günü sıfırdan başlar ilk gün pazardır
console.log(tarih.getHours());
console.log(tarih.getMinutes());
console.log(tarih.getSeconds());
console.log(tarih.toLocaleTimeString());  // saat dakika saniye
console.log(tarih.toLocaleDateString());  // gün ay yıl
console.log(tarih.toLocaleString); // bütün tarih */

function showTime() {
    const tarih = new Date();

    // Haftanın günleri
    let weekDayNumber = tarih.getDay();
    let arrayWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let weekDayName = arrayWeek[weekDayNumber]

    //clock.innerHTML = tarih.toLocaleString(); // Sadece tarih
    let tarihYaz = tarih.toLocaleString() + weekDayName
    clock.innerHTML = tarihYaz
}
showTime() // fonkisyonu ilk çalışır ve görüntü güzel gözükür
setInterval(showTime, 1000) //aralıklı çalıştırma