// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)  // true


let userName;
let isUserName = Boolean(userName)
console.log(isUserName) // false çünkü boş

Boolean("11") // true
Boolean("0") // true  --> yazı çünkü 
Boolean("") // false  --> çünkü içinde değer yok 

userName = "user"

console.log("User Name:", Boolean(userName))

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true


Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true



// denemeler
console.log("1n", Boolean(1n));
console.log("-1n", Boolean(-1n));
console.log("Infinity", Boolean(Infinity));
console.log("{}", Boolean({}));
console.log("Symbol", Boolean(Symbol()));

//1. soru
let a; Boolean(a);
console.log("a", Boolean(a));

//2. Soru
const b = "0"; Boolean(b);
console.log("b", Boolean(b));

//3. Soru
var x=10/'a';
console.log("x", Boolean(x));

var y = "" || -2 || 'JavaScript';
console.log("y", Boolean(y));

var z = {2:"js"};
console.log("z", Boolean(z));

//4. Soru
var t = "" && -2 && 'JavaScript'; 
console.log("t", Boolean(t));

var w = false || 0; 
console.log("w", Boolean(w));

var aTwo = true; 
console.log("aTwo", Boolean(aTwo));


