function factorial(x) {
    if (x < 3 ) return x;
    return factorial(x-1) * x

}



function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}



/*    //try this

let x = prompt("x değeri ver:")

function factorial(x) {
    if (x < 3 ) return x;
    return factorial(x-1) * x

}

console.log(factorial(x)); 
 */
