// DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

//URL
console.log(document.URL)

//location
console.log(document.location);

//hostname --> live server ile açarsan görürsün
console.log(document.location.hostname) 

// pathname
console.log(document.location.pathname)

// head icindeki bilgiler
console.log(document.head)

// body icindeki bilgiler
console.log(document.body)

// url bilgisi
console.log(document.URL)
console.log(document.baseURI)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabilirsiniz..
document.body.style.backgroundColor = "aqua"


// Alistirma

// Sana verdiğimiz içerikte butona tıklanınca yeni bir sayfa açılacak ve içerisinde "Hello World!" yazacak. Üzerinden değişiklikler yaparak nasıl çalıştığını anlamaya çalış!

// Aşağıdaki codepen içerisinde id="domain" olan boş bir /paragraf oluştur. Ardından butona tıkladığımızda paragrafın içerisine istediğin bir metni yazdır. Aşağıdaki kod parçası sana yardımcı olacak!

document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";

//Yukarıdaki kod ile id'si domain olan bir eleman içerisinde innerHTML metodunu kullanarak istediğimiz değişikliği yapabiliyoruz.