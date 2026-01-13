// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

/* Örnek li yapısı

<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge text-bg-primary rounded-pill">14</span>
</li>
*/



let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')


// alert div'ine müdahale
const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()  // bilgiler adresbar'da gözükmesini engeller
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)  // gonderdikten sonra sifirladik
        USER_NAME.value = "" 
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"  // danger - success - warning ile hata mesajının temasını ayarlarız
        )
    }
    
}

let userListDOM = document.querySelector('#userList') //Listeyi seçtik

const addItem = (userName, score) => {
    let liDOM = document.createElement('li') // li elementi açtık
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM) // li elementini bitirdik
}
