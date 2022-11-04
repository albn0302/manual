// Loopar

// Loopar är ett sätt att upprepa samma kod flera gånger

// "while" loopen

/* while (condition) {
    // kod
    // så-kallad "loop body"
}; */

/* let i = 0;
while (i < 3) {
    alert(i); // visar 0, sedan 1 och sedan 2
    i++; // i = i + i;
}; */

// 0, -0, null, undefined, "", NaN = falska värden (false)
// true, 42, "0", "false", -42, {}, [] = sanna värden (true)

/* let i = 3;
while (i) {
    alert(i); // visar 3, sedan 2 och sedan 1
    i--; // i = i - i;
} */

// "do ... while" loopen

/* let i = 0;

do {
    alert(i);
    i++;
} while (i < 3); */

// "for" loopen

/* for (begin; condition; step) {
    // loop body
}; */

/* for (let i = 0; i < 3; i++) {
    alert(i);
}; */

// Bryter loopen

/* for (let i = 0; i < 3; i++) {
    if (i == 2) break;
}; */

// Fortsätt till nästa iteration
/* for (let i = 0; i < 10; i++) {
    if (i == 6) continue;
    alert(i); // den här kommer inte att köras om i är 6
}; */