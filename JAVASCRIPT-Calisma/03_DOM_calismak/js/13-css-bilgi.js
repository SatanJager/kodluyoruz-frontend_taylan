// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector("#greeting")

console.log(greeting.classList)

greeting.classList.add("text-primary");
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek

console.log(greeting.classList)


greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek

console.log(greeting.classList)


//Alıştırma

//Add
const div=document.getElementById("add");
div.classList.add("fancy","add","addMetod");

const classNames = div.classList;
document.getElementById("pAdd").innerHTML="Class ekledikten sonra liste: "+ classNames;

//Remove
div.classList.remove("addMetod");
document.getElementById("pRemove").innerHTML="Class sildikten sonra liste: "+ classNames;

//Item
 const firstClassName=div.classList.item(0);
 document.getElementById("pItem").innerHTML= "İlk class: "+ firstClassName;

//Contains
const result=div.classList.contains("add");
document.getElementById("pContainsTrue").innerHTML="'add' class'ını içeriyor mu? "+" --> "+ result;
const result2=div.classList.contains("addMetod");
document.getElementById("pContainsFalse").innerHTML="'addMetod' class'ını içeriyor mu? "+" --> "+ result2;

//Replace
div.classList.replace("add","newClass");
document.getElementById("pReplace").innerHTML=classNames;

//Toggle
const pToggle=document.getElementById("pToggle")
const button=document.getElementById("toggleButton");
button.addEventListener("click",function(){
pToggle.classList.toggle("colorp");
})
//Length
document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length;


//add Buttonu
// text, input ve button u seçtik
const addClass = document.querySelector("#veriClass");
const ekleButton = document.querySelector("#addButton");
const paragraf = document.querySelector("#renkliYazi")

ekleButton.addEventListener("click", function() {

    const className = addClass.value.trim();

    if (className === "") {
        alert("Lütfen geçerli bir class ismi giriniz! ali, ayse, mehmet");
            return;
    }

    //eski classları silme
    paragraf.className = "";

    //yeni class ekleme
    paragraf.classList.add(className);

});

//button ile hangi class var ona baktık
let alertButton = document.querySelector("#acil");
let yakalaParagraf = document.querySelector("#bunuYakala")

alertButton.addEventListener("click", function() {

    let listeClass =yakalaParagraf.className;

    alert(listeClass)
})
