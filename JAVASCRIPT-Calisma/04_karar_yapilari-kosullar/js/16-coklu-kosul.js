// ********** Coklu Kosullarla Calismak **********

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanici Adiniz Yok"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}

// Switch case

/* switch(ifade) {
  case a:
    // kod bloğu
    break;
  case b:
    // kod bloğu
    break;
  default:
    // kod bloğu
} */


// Örnek

// let hava = "Gunesli";
let hava = prompt("Hava Durumunu Girin: (Yagmurlu, Gunesli, Bulutlu, Karlı, Firtinali)")
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
      break;
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}

// Örnek

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem