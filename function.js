// Funktioner

// Funktions deklaration

/* function visaMeddelande() {
    alert('Hejsan allihopa!');
};

visaMeddelande(); // Kallar på funktionen genom dess namn

// Lokala variabler
function visaMeddelande() {
    let meddelande = 'Hejsan, jag är JavaScript'; // Lokal variabel

    alert(meddelande);
};

visaMeddelande();

alert(meddelande); // <-- Error! Variabeln är lokal inom funktionen */

// Yttre variabler

/* let användarNamn = "Jonas";

function visaMeddelande() {
    användarNamn = "Bob";

    let meddelande = "Hello " + användarNamn;
    alert(meddelande);
};

alert(användarNamn); // Jonas före funktionen kallas

visaMeddelande();

alert(användarNamn); // Bob, värdet blev modifierat av funktionen */

// Parametrar
/* function visaMeddelande(from, text) { // Parametrar: from, text
    alert(from + ': ' + text);
};

visaMeddelande("Anna", "Hejsan!"); // Anna: Hejsan!
visaMeddelande("Anna", "Hur står det till?"); // Anna: Hur står de till?

// Standard värde
function visaMeddelande(from, text = "ingen text är given.") {
    alert(from + ': ' + text);
};

visaMeddelande("Anna"); // Anna: ingen text är given. */

// Returnera ett värde

/* function sum(a, b) {
    return a + b;
};

let resultat = sum(1, 3); // 4

function kollaÅlder(ålder) {
    if (isNaN(ålder)) { // Om åldern inte är en nummer
        return; // Stäng funktionen
    };

    if (ålder >= 18) {
        return true;
    } else {
        return false;
    };
};

return ålder >= 18 ? true : false; 

kollaÅlder(16); */