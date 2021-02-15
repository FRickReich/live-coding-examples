// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4
// https://www.tutorialsteacher.com/javascript/closure-in-javascript
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

/**
 * Closure
 * - Declaring functions inside functions
 * - Nested scopes: Accessing outer variables
 * - First definition of closure: 
 *   A function that contains at least one variable, and one nested scope"
 * - Encapsulation: Isolating scopes with IIFE, IIFE vs. SIAF
 * - Higher Order functions I: ""Functions that return other functions""
 * - Reading a program VI (the function call onion)"
 */

// Closure bedeudet das eine funktion innerhalb einer funktion immer zugriff auf die variablen und parameter der äusseren funktion hat, auch wenn der aufruf der äusseren funktion schon abgeschlossen ist.

/**
 * Eine Closure ist ein feature von JavaScript, wo eine innere funktion zugang zu den variablen der äusseren funktion hat, eine sogenanntes scope-chain.
 * Eine closure hat 3 scope-chains:
 * - Zugang zu ihrem eigenen scopes, also alles was innerhalb seines code-blocks definiert ist.
 * - Zugang zu den variablen der äusseren funktion.
 * - Zugang zu den globalen variablen.
 */
 
// Aber was bedeutet das nun?
// Hier ein kleiner beispielcode.

function aussen()
{
    let ersteNummer = 10;
    function innen()
    {
        let zweiteNummer = 20;
        console.log("ersteNummer: " + ersteNummer, "zweiteNummer = " + zweiteNummer);
        ersteNummer++;
        zweiteNummer++;
    }

    return innen;
}

/**
 * Wir haben hier 2 Funktionen:
 * - Die 'aussen' Funktion, die die Variable 'ersteNummer' beinhaltet und die 'innere' Funktion returned.
 * - Die 'innen' Funktion, die die Variable 'zweiteNummer' beinhaltet und die äussere Variable 'ersteNummer' innerhalb ihres code-blocks anspricht.
 * 
 * Das scope der variable 'ersteNummer' ist auf die äussere funktion beschränkt,
 * und das scope der variable 'zweiteNummer' ist beschränkt auf die innere funktion.
 */

/**
 * Wir rufen jetzt die Funktion 'aussen()' auf, und speichern das resultat der 'aussen()' funktion in einer Variable.
 * Wir rufen die funktion noch einmal auf und speichern sie in einer anderen variable.
 */

const ersteFunktion = aussen();
const zweiteFunktion = aussen();

/**
 * Bei der ersten funktion passiert folgendes:
 * - die variable 'ersteNummer' wird erstellt, ist nur in der 'aussen()' funktion verfügbar, und hat einen wert von 10.
 * - in der letzten zeile steht return 'inner', es sucht nach einer variable namens 'inner', 
 * es findet die funktion mit den namen und returnt sie. (Das return statement führt die funktion nicht aus, wenn es nicht von () gefolgt ist. es returned nur den body der funktion).
 * - der inhalt des returns werden in 'ersteFunktion' gespeichert, also beinhaltet 'ersteFunktion' jetzt folgendes:
 * function innen()
    {
        let zweiteNummer = 20;
        console.log("ersteNummer: " + ersteNummer, "zweiteNummer = " + zweiteNummer);
        ersteNummer++;
        zweiteNummer++;
    }
 * die funktion 'aussen' wird fertig ausgeführt und die variablen im scope von 'aussen' existieren nicht mehr.
 */

ersteFunktion();

/**
 * Ein wichtiger aspekt von closures ist, das die äussere variable ihren state/wert zwischen mehreren aufrufen behalten kann.
 * Die Innere funktion behält keine seperate kopie der äusseren variable, sondern nutzt eine referenz dieser variable. 
 * Diesas bedeutet, das der Wert der äusseren variable veränderbar ist, wenn man ihn in der inneren funktion angesprochen wird.
 */
ersteFunktion();

console.log("=".repeat(50));

// Wenn wir die andere kopie der funktion aufrufen, merken wir das diese kopie komplwett unabhängig von der ersten kopie genutzt werden kann.
zweiteFunktion();
zweiteFunktion();

