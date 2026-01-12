// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting2")
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("etkinlik denetlendi")
    //console.log(this)  //-->kim olduğunu görürüz
    //console.log (this.innerHTML = "tiklandiği için bilgi değişti")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

//mouse geldiğinde

let fareGel = document.querySelector("#fareGel")
fareGel.addEventListener("mouseover", domClick)

function domClick() {
    console.log("mouse geldi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

//Alıştırma 1

//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener('change' ,selectBox1);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox1(event){
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
  }
  
// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue


//Alıştırma 2

// iç içe elementler çağrıldı  
const selectBox = document.querySelector("#selectColor");
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');

selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })

// Alıştırma 3

let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', function (event) {
    output.innerText = event.target.value.split('').join('');
});

// hem input hem de keypress çalışıyor ama patika.dev input demiş :S

// Alıştırma 4

let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function () {
    purpleBall.style.backgroundColor = "yellow";
}