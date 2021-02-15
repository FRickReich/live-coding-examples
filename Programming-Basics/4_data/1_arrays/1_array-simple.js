// "Array: Saving multiple values in one name
// - Assigning array literals: 
//   `const <array name> = [<value 1>, <value 2>, ...]`
// - Accessing array items with square brackets
// - Re-assigning array items with square brackets
// - `const`s and array items"

// Eine Array ist eine sammling von Daten, zum Beispiel mehrere Strings, oder mehrere Nummern.
// Mit Arrays können wir Datensätze speichern und mit ihnen arbeiten.

const stringArray = [ "ersterWert", "zweiterWert", "dritterWert" ];
const numberArray = [ 15, 25, 18, 7, 5.25, 3.0 ];
const boolArray = [ true, false, false, true, true, true ];
const mixedArray = [ true, "test", 5, 2.5 ];

// mit dem new keyword können wir auch eine Array mit einer anzahl leerer werte anlegen:
const newArray = new Array(6);

// mit einem console.log(); können wir die kompletten inhalte der array ausgeben:
console.log(stringArray);
console.log(numberArray);
console.log(boolArray);
console.log(mixedArray);
console.log(newArray);

// mit einer eckigen klammer nach dem namen der array können wir auf einen wert innerhalb der array zugreifen,
// mit dem zählen starten wir bei 0.
const wertAusStringArray = stringArray[2];

console.log(wertAusStringArray);

// mit dem length befehl können wir ausserdem herausfinden wieviele elemente unsere array beinhaltet.
console.log(wertAusStringArray.length);