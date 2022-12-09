// Objekt

// Lagrar samlingar av data
// https://javascript.info/object

// Vanliga variabler
let namn = "Jonas";
let ålder = 30;

// Skapar objekt
let användare = new Object();
let användare { };

let användare = {
    namn: "Jonas",
    ålder: 30,
};

// Åtkommer data i objektet
alert(användare.namn); // Jonas
alert(användare.ålder); // 30

// Lägger till data i objektet
användare.ärAdmin = true;
användare.efterNamn = "Mickelson";

// Hakparenteser för fler ordig nyckel
användare["efter namn"] = "Mickelson";

användare["efter namn"]; // Mickelson

// Ta bort data från objektet
delete användare.efterNamn;

// "for .. in" loopen
for (nyckel in object) {
    // Loopa över varje nyckel i objektet
};

for (let nyckel in användare) {
    console.log(nyckel); // namn, ålder, ärAdmin

    användare[nyckel]; // Jonas, 30, true
};

let koder = {
    "49": "Tyskland",
    "41": "Schweiz",
    "44": "Storbritannien",
    "2": "USA",
    "1": "Finland",
};

for (let kod in kod) {
    alert(kod); // 1, 2, 44, 49, 42
};

let user = {
    "name": John,
    "surname": Smith,
};

user.name = "Pete";

delete user.name;

let sum = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

for (let name in salaries) {
    salaries[John] + salaries[Ann] + salaries[Pete]; // 100, 160, 130
    sum += salaries[name]; // 100, 160, 130
};

alert(sum); // 390