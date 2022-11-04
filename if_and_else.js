// "if" påståendet
// Utför ett block av kod om resultatet är sant

/* let old = prompt("How old are you?");

if (old > 18) alert("You are of legal age!");

if (old > 18) {
    alert("You are of legal age!");
    alert("You can buy beer!");
     ...
} eles {
    alert("You are too young!");
}; */

/* if (old > 18) {
    // sant
} else if (old > 65) {
    // "pensionerad ... "
} else if (old > 100) {
    // är du inte snart död?
} else {
    // under 18 ...
}; */

/* let accessAllowed;
let age = prompt("How old are you?");

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
};

if (accessAllowed) {
    login();
}; */

// Villkorlig operatör "?"

/* let result = condition ? value1 : value2; // Förkortad "if" sats

let accessAllowed = (age > 18) ? true : false; */

let result = (a + b < 4) ? 'Below' : 'Over';

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over'
};

