// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let h3 = document.getElementsByTagName('h3')
console.log(h3.title.innerHTML);

let title2 = document.getElementById('title2')
console.log(title2.innerHTML)
title2.innerHTML = "Degisen Bilgi"
console.log(title2.innerHTML)

let link2 = document.querySelector("ul#list>li>a")
console.log(link2)
link2.innerHTML = "link bilgisi değişti";

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')


//ALISTIRMALAR

const inputs1 = document.getElementById('signup').getElementsByTagName('input'); 

console.log(inputs1);
//veya

const inputs2 = document.querySelector(`#signup`).querySelectorAll(`input`);

console.log(inputs2);