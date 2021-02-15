// Eine kürzere methode um funktionen zu schreiben sind die so genannten Arrow-Functions

// Vorher: 
// const beispielFunktion = function()
// {
//     console.log("Ich bin eine Funktion!");
// }

// Oder:
// function beispielFunktion()
// {
//     console.log("Ich bin eine Funktion!");
// }

// Arrow-Function:
// const beispielFunktion = () =>
// {
//     console.log("Ich bin eine Funktion!");
// }

// bei einem simplen kommando innerhalb der funktion, 
// kann man die klammern auch weglassen, und code sehr angenehm verkürzen.
const beispielFunktion = () => console.log("Ich bin eine Funktion!");
// seit kurzem kann man das const sogar weg lassen.

beispielFunktion();

// mit unserem neuen wissen können wir den divider den wir vorher mühsam kopiert haben, 
// jetzt als arrow function anlagen und wiederverwenden:
divider = () => console.log("=".repeat(50));

divider();

// Eine arrow function mit nur einem statement hat automatisch einen rückgabewert, und benötigt dafür kein return statement.

returnTest = () => "Hello World!";
console.log(returnTest());

returnTest2 = () => 5 + 7;
console.log(returnTest2());

divider();

// Einer arrow function können, genau wie bei einer normalen funktion auch werte übergeben werden.
// ohne klammern: 
// showMessage = userName => console.log(`Hallo, ${ userName }!`);
showMessage = (userName = "Alex") => console.log(`Hallo, ${ userName }!`);
showMessage("Max");
showMessage("John");
showMessage();