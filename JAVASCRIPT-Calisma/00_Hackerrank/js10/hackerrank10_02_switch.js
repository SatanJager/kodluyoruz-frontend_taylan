function getLetter(s) {
    let letter;
    // Solution
    switch (true) {
        // Strings are arrays of characters
        case "aeiou".includes(s[0]):
            letter = "A";
            break;
        case "bcdfg".includes(s[0]):
            letter = "B";
            break;
        case "hjklm".includes(s[0]):
            letter = "C";
            break;
        case "npqrstvwxyz".includes(s[0]):
            letter = "D";
            break;
    }
    return letter;   
}



/* let s = prompt("Lütfen bir kelime yazın:")

switch (true) {
        // Strings are arrays of characters
        case "aeiou".includes(s[0]):
            letter = "A";
            break;
        case "bcdfg".includes(s[0]):
            letter = "B";
            break;
        case "hjklm".includes(s[0]):
            letter = "C";
            break;
        case "npqrstvwxyz".includes(s[0]):
            letter = "D";
            break;
    }

console.log(letter) */