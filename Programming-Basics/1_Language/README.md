# Tipps

## Code-Convention
Um sicherzustellen das wir alle denselben "Code-Style" haben und unsere Codes für jeden von uns einfacher zu lesen ist, bitte ich dich, bei allen JavaScript Übungen meine regeln anzuwenden:

1. Brackets stehen vorzugseise in einer neuen Zeile:
```js
// Falsch:
funktion() {
    ...inhalt;
}

// Richtig:
funktion()
{
    ...inhalt;
}
```

2. Bei Strings nutzen wir vorwiegend Single-Quotes:
```js
// Falsch:
"Dies ist ein String";

// Richtig:
'Dies ist ein String';
```

3. Variablennamen schreiben wir in camelCase und Funktions/Methoden-Namen in PascalCase:
```js
// Falsch:
var NewVariable;
var NEW_VARIABLE;
var New_Variable;

newfunction();
new_Function();

// Richtig:
var newVariable;

NewFunction();
```

4. In Arrays und Objekten vor und nach den Werten fügen wir ein Leerzeichen ein:
```js
// Falsch:
[a, b, c, d, e]
{a, b, c, d, e}

// Richtig
{ a, b, c, d, e }
[ a, b, c, d, e ]
```

5. Wir beenden jedes Kommando mit einem Semikolon:
```js
// Falsch:
var testValue = 5

testValue + 8

// Richtig:
var testValue = 5;

testValue + 8;
```

6. Wenn wir eine neue Variable deklarieren, nutzen wir vorzugsweise `const`. `let` nutzen wir nur, wenn wir wissen das der Wert überschrieben werden kann, var nutzen wir fürs erste garnicht.
```js
// Falsch:
let testValue = 5; // oder auch var testValue = 5;
console.log(testValue);

// Richtig:
const testValue = 5;
console.log(testValue);
```

7. Wenn du deinen Code kommentierst, nutzt du bitte entweder Single-Line comments oder JSDoc comments.
```js
// Falsch:
/* Dies ist ein Kommentar */
/* 
Dies ist ein Kommentar
*/
/*
    Dies ist ein Kommentar
*/

// Richtig:
// Dies ist ein Kommentar

/***
 * Dies ist ein
 * Kommentar
 */
```
