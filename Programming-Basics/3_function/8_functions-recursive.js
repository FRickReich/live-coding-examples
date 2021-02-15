// https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea

/**
 * Recursive Functions
 * - Recursive algorithms
 * - Calling a function from within itself
 * - Stack overflow: Importance of the exit condition
 * - Reading a program VII (recursive call tree)"
 */

/**
 * Recursion
 * Eine Rekursion ist, wenn eine funktion sich selber aufruft.
 */


// // In zeile 4 des code-blocks returnen wir x, und rufen die funktion in sich selber noch einmal auf, 
// // mit dem parameter  x - 1, also unserem anfangswert minus 1.

// Eine rekursion besteht im normalfall aus 3 sektionen:
// Eine sektion zum abbrechen der funktion = if(etwas schlechtes) return;
// Eine sektion zum beenden der ohne fehler, genannt "Base Case";
// Eine sektion für die Rekursion, in der wir die funktion in sich selber wieder aufrufen: return x * fa...

// also:
function funktionsName(x)
{
    // Termination
    if(x < 0) return;
    
    // Base
    if(x === 0) return 1;
    
    // Recursion
    return x * factorial(x - 1);
}

// Ein bekanntes beispiel für rekursion ist das faktorial

// Diese berechnung soll die nummer immer mit sich selber multiplizieren, minus 1, bis es die zahl null erreicht.
// zb: 
// - 4 = 4 * 3 * 2 * 1 = 24
// - 2 = 2 * 1

function factorial(x)
{
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}

console.log(factorial(4));

console.log("=".repeat(50));

// Ein beispiel, das ich letzte woche dafür schon einmal zeigte war ein countdown.
function countDown(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDown(number - 1);
}

countDown(5);

console.log("=".repeat(50));

// Was wir damit beispielsweise auch erreichen können ist eine funktion, mit der wir den inhalt einen strings umdrehen können:

// substr() gibt einen string aus, beginnend an einer spezifischen stelle.
// Wir starten an zweiter stelle und ignorieren das erste zeichen.
// input[0] gibt uns das erste zeichen des strings.
// Wir fangen also den string beim zweiten buchstaben an, und packen den ersten buchstaben hinten dran.
function reverseString(input)
{
    if(input === '') return '';
    
    return reverseString(input.substr(1)) + input[0];
}

// Wir brauchen hier diesmal kein Termination statement, 
// da wir keinen string haben können mit einer negativen anzahl von zeichen, ein leerer string ist ein leerer string.

const ergebnis = reverseString('Hello World');
console.log(ergebnis);
