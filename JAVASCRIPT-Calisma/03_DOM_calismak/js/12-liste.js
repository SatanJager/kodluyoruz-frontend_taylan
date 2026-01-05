// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

//list12 id li ul nin son li'sinin içini görmek

let item = document.querySelector("ul#list12>li:last-child")
console.log(item);

let item2 = document.querySelector("ul#list12>li:first-child").innerText
console.log(item2);


let lastChild = document.querySelector("ul#list12>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list12>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

// Yeni öge eklemek

let ulDOM = document.querySelector("ul#list12")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

ulDOM.append(liDOM) // en sona ekler
// ulDOM.prepend(liDOM)  // en başa ekler


//Alıştırmalar

var one = document.getElementById("walterwhite").innerText; // element döndürür
console.log(one);

var two = document.getElementsByClassName("alternate"); // nodeList olarak döndürür
console.log(two);

// örnekte two[i].style.color = "red"; 
// two[i].innerHTML = "merhaba"

for (var i = 0; i < two.length; i++) {
   two[i].style.color = "red";
}

let nameList = document.querySelector("ul.nameList"); // ul leri seçmek class olduğu için . kullandık

// input ve button u seçtik
var urun = document.querySelector("#veri");
var ekle = document.querySelector("#ekle");

ekle.addEventListener("click", function() {
    // createElement ile yeni bir listItem <li> oluşturuyoruz
    var li = document.createElement("li");

    //Input ile gelen veriyi "li" içerisine metin olarak giriyoruz
    li.textContent = veri.value;

    //appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizi içine ekliyoruz.
    nameList.appendChild(li);

    //Veri inputu içerisindeki metni siliyoruz
    veri.value = "";
});

