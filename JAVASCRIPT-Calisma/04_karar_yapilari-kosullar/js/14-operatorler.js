// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user = "hakan"

// == Eşitse
console.log("== :", price == 1 )
console.log("== :", price == 100 )

// === Hem değeri hem de türü eşitse
console.log("=== :", price === 1 )
console.log("=== :", price === 100 )

// != Eşit değilse
console.log(user != "guest" )

// < Küçükse
console.log("price < 100", price < 100)

// <= Küçük veya eşitse
console.log("price <= 100", price <= 100)

// > Büyükse
console.log("price > 200", price > 200)

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)


// && ve
price = 0
console.log("price > 0 && user != guest :", price > 0 && user != "guest" )

// || veya
console.log("price > 0 || user != guest :", price > 0 || user != "guest" )

// ! degil (tersi)
user = "guest"
price = 1
console.log("price > 0 && !user == guest :", price > 0 && !user == "guest" )


// Alıştırmalar
let a=3;
let b=5;
console.log("a===b :", a===b);

console.log("2 :", 2);  // --> 2
console.log("!2 :", !2);  // --> false
console.log("!!2 :", !!2);  // --> true

var user1 = "guest";
var price1 = 1;

console.log(price > 0 && !user == "guest") // --> false

console.log(price > 0 && user == "guest") // --> true

console.log(price > 2 && user == "guest") // --> false

console.log(!(price > 0 && user=="guest")) // --> false
