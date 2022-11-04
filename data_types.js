// DATA TYPER
// Ett värde i JavaScript är alltid en viss typ. Till exempel en sträng eller ett nummer

// Nummer
let n = 123; // heltal
n = 12.345; // decimaltal

alert(23 / "ingen nummer") // error NaN (Not a Number (sv. IeN (Inte en Nummer)))

// Sträng

let str = "Hello";
let str2 = 'Ensam kvotar är också okej';
let phrase = `kan bädda in en annan ${str}, result ${3 + 4}`; // kan bädda in en till Hello, resultat

console.log(id + '-' + i) // 1-23
console.log(`${id}-${i}`)// samma, 1-23

// Boolean
// Har bara två värden: sant och falskt (true, false)
let ageFieldChecked = false;
let nameFieldChecked = true;

let isGreater = 4 > 1;

alert(isGreater); // sant

// "null" typen
// Speciellt värde som representerar "nothing", "empty", "value unknown"
let age = null; // age är okänt

// "undefined" värdet
let years;

alert(years); // visa "undefined"

// inget error
let message = "Hello World!"; // sträng
message = 1234; // nummer

// typeof operatören
// returnerar typen

typeof 23; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"