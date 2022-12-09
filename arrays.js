// Arrayar

// Largra samlingar av data
// https://javascript.info/array

// Skapa en tom array
let arr = new Array();
let arr = [];

// Skapa en array med data
let frukter = ["Äpple", "Appelsin", "Plummon"];

// Åtmkommer data i en array
// !! Array element är numrerade, börjar med NOLL !!

frukter[0]; // Äpple
frukter[1]; // Appelsin
frukter[2]; // Plummon

// Utbyt ett element i en array
frukter[2] = "Päron";

// Lägg till e ny till arrayen
frukter[3] = "Citron"; // nu är det ["Äpple", "Appelsin", "Päron", "Citron"]

// Totala mängden av elementen i arrayen
frukter.length; // 4

let arr = ["Äpple", { namn: "Jonas" }, ["Plummon", ["Appelsin"]], function () {
    alert("Hello!")
}];

arr[1].namn; // Jonas

arr[3]; // Hello

// pop
let frukter = ["Äpple", "Appelsin", "Plummon"];

alert(fruits.pop()); // Tar bort "Plummon"

alert(frukter); // Äpple, Appelsin

// push
frukter.push("Päron");

alert(frukter); // Äpple, Appelsin, Päron

// shift
frukter.shift(); // Tar bort "Äpple" (alltså första saken i arrayen)

alert(frukter); // Appelsin, Päron

// unshift
frukter.unshift("Äpple"); // Lägger till en sak till början av arrayen

alert(frukter); // Äpple, Appelsin, Päron

// Loopar
let frukter = ["Äpple", "Appelsin", "Plummon"];

for (let i = 0; i < frukter.length; i++) {
    console.log(frukter[i]); // Äpple, Appelsin, Plummon
};

// for .. of
for (let frukt of frukter) {
    console.log(frukt); // Äpple; Appelsin, Plummon
};

const saker = [];

saker.push({
    tidsstämpel: "14:35 8.12 2022",
    text: "Hämta barnen från dagis",
    gjort: false,
});

saker.push({
    tidsstämpel: "14:35 8.12 2022",
    text: "Hämta barnen från dagis",
    gjort: true,
});

[{
    tidsstämpel: "14:35 8.12 2022",
    text: "Hämta barnen från dagis",
    gjort: false,
}, {
    tidsstämpel: "14:35 8.12 2022",
    text: "Hämta barnen från dagis",
    gjort: true,
}];

