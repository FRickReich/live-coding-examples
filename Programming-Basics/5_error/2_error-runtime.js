/*
"Runtime errors:
- Catching errors: `try { ... } catch (e) { ... }`
- Throwing runtime errors: `throw <expression>;`
- The error object (brief intro): `new Error(<message>);`"
*/

// https://javascript.info/try-catch

try
{
    // Versuche diesen code-block auszuführen.

}
catch (error)
{
    // ... im falle eines fehlers innerhalb des try-blocks, 
    // breche ab und führe diesen code-block aus, sonst ignoriere ihn.
    
    // fehler anzeigen
    console.log(error);
}

// Beispiel
try
{
    console.log("vor dem fehler...");
    nichtExistierendeFunktion();
    console.log("nach dem fehler...");
}
catch(error)
{
    console.log(error.message); // nichtExistierendeFunktion is not defined
    console.log(error.name); // ReferenceError
    console.log(error.stack); // Die ausführliche fehlerinformation, mit zeilenangabe und quellenangabe.
}

console.log("=".repeat(50));

// Eigene fehlernachricht
try
{
    nichtExistierendeFunktion();
}
catch
{
    // Error - Allgemeiner fehler.
    // ReferenceError - Eine referenz konnte nicht gefunden werden.
    // SyntaxError - Der code hat einen syntaxfehler.
    // TypeError - Mit dem angegeben datentyp kann nicht gearbeitet werden.
    const error = new Error("Wir haben einen fehler!");

    console.log(error.message);
    console.log(error.name);
}

console.log("=".repeat(50));

// Wir können nach dem fehler auch einen weiteren code-block ausführen
try
{
    // Versuche diesen code-block auszuführen.

    fehlendeFunktion();
}
catch (error)
{
    // ... im falle eines fehlers innerhalb des try-blocks, 
    // breche ab und führe diesen code-block aus, sonst ignoriere ihn.

    console.log(error.message);
}
finally
{
    // Nach dem fehler, führe diesen code-block aus.

    console.log("Dies hier passiert nach dem fehler...");
}

console.log("=".repeat(50));

// Wenn javascript einen fehler findet, wirft es normalerweise einen fehler aus, 
// und stoppt das programm. Diese situation können wir auch selber auslösen, 
// wenn wir einen fehler manuell auswerfen.

// Einen fehler auswerfen, und das programm beenden.
throw new Error("Dies ist ein wirklich wirklich schwerer fehler!");


