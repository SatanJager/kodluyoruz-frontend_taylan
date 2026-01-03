// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "satanjager"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}:${new Date().getMinutes()}

kisa isminiz: ${username[0]}.
`

console.log(info)

let taylan = ` deneme`

console.log(taylan)

const ad =`Aycan` 
const soyad =`Yerdelen` 
const gozRengi =`Kahverengi` 
const yas = 21 

const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisi; 

const kisi2 = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

// document.body.innerHTML = kisi2;


// Alıştırma

const kitap = {
  ad: "Fırtına",
  yazar: "Shakespeare",
  tarih: 1610
}

//const bookTable =
//      "<table border>"+
//  "<tbody>"+
//    "<tr>"+
//      "<td>"+"Kitap"+"</td>"+
//      "<td>"+kitap.ad+"</td>"+
//    "</tr>"+
//  "<tr>"+
//      "<td>"+"Yazar"+"</td>"+
//      "<td>"+kitap.yazar+"</td>"+
//    "</tr>"+
//      "<tr>"+
//      "<td>"+"Tarih"+"</td>"+
//      "<td>"+kitap.tarih+"</td>"+
//    "</tr>"+
// " </tbody>"+
// "</table>"

const bookTable =`
      <table border>
  <tbody>
    <tr>
      <td>Kitap</td>
      <td>${kitap.ad}</td>
    </tr>
  <tr>
      <td>Yazar</td>
      <td>${kitap.yazar}</td>
    </tr>
      <tr>
      <td>Tarih</td>
      <td>${kitap.tarih}</td>
    </tr>
 </tbody>
</table>
`
document.body.innerHTML = bookTable