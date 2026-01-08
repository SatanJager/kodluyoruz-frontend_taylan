const name = 'chris';
let howCoolAmI;

// TERNARY!
howCoolAmI = (name === 'chris') ? 100 : 999;

// show it to our user
document.getElementById('stuff').innerText = 
  `Level ${howCoolAmI}`