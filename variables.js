// VARIABLER
// Variablar används för att spara information

// LET

let message; // deklarera variabeln message

message = "Hello World!"; // lagra strängen "Hello World!" i variabeln som heter message

alert(message); // visar variabelns innehåll

// kombinera deklarationen och uppgiften
let name = "Albin";

// deklarera flera variablar på en linje (inte rekomenderat)
// let user = "Jonas", age = 35, city = "Jyväskylä";

// längre, men lättare att läsa
let user = "Jonas";
let age = "35";
let city = "Jyväskylä";

console.log(20 + age) // 2035

// gammaldags sätt att deklarera en variabel, (nästan) samma som let
/* var candy;

// Exempel
let height;

height = 35;

height = 92; // värdet ändrades, gammal data tas bort

alert(height); // 92 */

// Exempel
var candy;

// Exempel
let height;
let oldHeight;

height = 35;

oldHeight = height; // kopiera 35 från height till oldHeight

height = 92; // värdet ändrades, gammal data tas bort

alert(height); // 92

// CONSTANTS
// deklarera oföräderlig variabel (endast läs)

const myBirthday = "03.02.2006";

myBirthday = "03.02.2000"; // error, kan inte omfördela konstanten!

// Versal konstanter

const COLOR_RED = "#F00";
const COLOR_GREEN = "#00F";
const COLOR_BLUE = "#00F";

