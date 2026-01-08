/* 4.Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

Formül: vki = kg/(m * m)

İstenilenler:
Prompt ile kullanıcıdan bilgi almak

Verilen formülü uygun yere yazmak
Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek */

//Kod satırını buraya ekleyiniz.


let weight = prompt("Kilonuzu kilogram olarak buraya giriniz (Örn: 72) :")
let height = prompt("Boyunuzu metre olarak buraya giriniz (Örn: 1.72):")

function vkiHesapla(weight, height) 
{
  var vki = weight/ (height * height); //Bu kod satırını değiştiriniz

    if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);

    if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);

    if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);

    if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);

return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla(weight, height);