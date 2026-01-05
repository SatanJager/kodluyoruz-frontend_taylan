function istek() {
  let kelime = prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")

  document.write(kelime)
}

function istek2() {
    
  let userEntry = prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  
  let userMessage = document.querySelector(`#userMessage`)

  userMessage.innerHTML = `<span style="color: black">${userEntry}</span>`
  
}

function istek3() {
    
  let userEntry2 = prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  
  let userMessage2 = document.querySelector(`#userMessage2`)

  userMessage2.innerHTML = `${userMessage2.innerHTML} ${userEntry2}`
  
}