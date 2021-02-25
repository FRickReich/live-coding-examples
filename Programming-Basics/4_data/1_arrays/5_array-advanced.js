const divider = (methodName) => {
    console.log("\n"+ "=".repeat(25) + " ." + methodName + "(); " + "=".repeat(25));
}

divider("concat");

/**
 * @method .concat();
 * @description 
 * Mit .concact(); können wir, genau wie bei Strings mehrere Werte zusammenführen, oder in einer neuen speichern.
 * @example
 * [ firstArray ].concat([ secondArray ]);
 * @example
 * [ firstArray ].concat([ secondArray ], [ thirdArray ]);
 * @returns { Array }
 */
const arrayOne = [ "A", "B", "C" ];
const arrayTwo = [ 1, 2, 3 ];
const arrayThree = [ true, true, false ];

const arrayComplete = arrayOne.concat(arrayTwo, arrayThree);
console.log("arrayOne[], arrayTwo[] und arrayThree[] zusammengefügt:")
console.log(arrayComplete);

divider("indexOf");

/**
 * @method .indexOf();
 * @description 
 * Die Methode .indexOf(); gibt den ersten index zurück, der auf eine prüfung positiv reagiert.
 * Ein rückgabewert von -1 bedeutet das die prüfung negativ verlief.
 * @example
 * [ array ].indexOf(Wert);
 * @example
 * [ array ].indexOf(Wert, startPosition);
 * @returns { number }
 */
const colors = [ "red", "green", "orange", "blue", "yellow", "pink" ];

// wir suchen die farbe grün um herauszufinden wo sie sich befindet.
const findColor1 = colors.indexOf("green");
console.log("position von green: " + findColor1);

// wir suchen die farbe purple
const findColor2 = colors.indexOf("purple");
console.log("position von purple: " + findColor2);

// wir suchen die farbe "blue" und fangen mit der suche bei position 3 an.
const findColor3 = colors.indexOf("blue", 3); // mehr als 4 - als test;
console.log("position von blue: " + findColor3);

divider("includes");

/**
 * @method .includes();
 * @description
 * Die Methode .includes(); gibt einen boolean zurück, wenn ein gesuchter wert in der array vorhanden ist.
 * @example
 * [ array ].includes(Wert);
 * @example
 * [ array ].includes(Wert, startPosition);
 * @returns { boolean }
 */
// wir wollen wissen ob die farbe Grün in der array vorhanden ist
console.log("grün gefunden: " + colors.includes("green"));

// wir wollen wissen ob die farbe purple in der array vorhanden ist.
console.log("purple gefunden: " + colors.includes("purple"));

divider("map");

/**
 * @method .map();
 * @description 
 * Die Methode .map(); erstellt eine neue array,
 * und befüllt dise mit den Daten,
 * die nach der ausführung einer callback funktion mit jedem element in der array zurückkommen.
 * @example
 * [ array ].map(callback(wert) {});
 * @example
 * [ array ].map(callback(wert, index) {});
 * @returns { Array }
 */
const numbers = [ 8, 16, 32, 64, 128, 256 ];

const newNumberList = numbers.map(number =>
{
    return number * 2;
});
// arrow function: newNumberList = numbers.map(number => number * 2);

console.log("jeder wert in numbers[] multipliziert mit 2:");
console.log(newNumberList);

/**
 * Warum nutzen wir map anstelle von foreach?
 * Die foreach methode liefert undefined zurück, da wir die daten der array nur INNERHALB der array nutzen, etwas mit der array zu tun.
 * Die .map(); methode gibt uns im gegensatz dazu die inhalte der array als neue array aus.
 */
const newNumbers2 = numbers.forEach(number =>
{
    return number * 2;
});
console.log(newNumbers2);

divider("filter");

/**
 * @method .filter();
 * @description
 * Die Methode .filter(); filtert die inhalte der Array anhand der callback funktion,
 * und gibt uns eine neue array aus, befüllt mit den positiv bewerteten elementen.
 * @example
 * [ array ].filter(callback(wert));
 * @example
 * [ array ].filter(callback(wert, Index) {});
 * @returns { Array }
 */
const drinks = [ "coffee", "tea", "cola", "fanta", "sprite", "wine", "wodka" ];

const newDrinkList = drinks.filter(drink =>
{
    return drink[0] === "w";
});

console.log("elemente in drinks[] die mit w anfangen:");
console.log(newDrinkList);

divider("reduce");

// https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Array/reduce
// https://www.freecodecamp.org/news/reduce-f47a7da511a9/
/**
 * @method .reduce();
 * @description
 * Die Methode .reduce(); reduziert die inhalte der Array auf einen einzigen wert, 
 * indem es zwei elemente (von links nach rechts) durch eine funktion vergleicht und reduziert
 * um zum beispiel die Summe oder den Durchschnitt von Werten in der Array zu finden.
 * @example
 * [ array ].reduce(callback(Wert1, Wert2) {});
 * @example
 * [ array ].reduce(callback(Wert1, Wert2) {}, InitialWert);
 */
const someNumbersArray = [ 12, 22, 8, 6, 7 ];

const sumOfSomeNumbers = someNumbersArray.reduce((firstValue, secondValue) => firstValue + secondValue);
/*
 *
 * const sumOfSomeNumbers = someNumbersArray.reduce(function(firstValue, secondValue)
 * { 
 *    return firstValue + secondValue;
 * });
 */

console.log("summe aller zahlen in someNumbersArray[]: " + sumOfSomeNumbers);

/**
 * Logik:
 * | Iteration | Variablen                         | Aktion                   | Ergebnis |
 * |-----------|-----------------------------------|--------------------------|----------|
 * | 1         | firstValue = 12, secondValue = 22 | firstValue + secondValue | 34       |
 * | 2         | firstValue = 34, secondValue = 8  | firstValue + secondValue | 42       |
 * | 3         | firstValue = 42, secondValue = 6  | firstValue + secondValue | 48       |
 * | 4         | firstValue = 48, secondValue = 7  | firstValue + secondValue | 55       |
 */

/**
 * Find Max Number Example
 */
const arrayOfNumbers = [ 5, 8, 7, 11, -6 ];

const highestNumber = arrayOfNumbers.reduce((firstValue, secondValue) =>
{
    if(firstValue > secondValue)
    {
        return firstValue;
    }
    else
    {
        return secondValue;
    }
}, 4);

/**
 * Logik:
 * 
 * | Iteration | Variablen                         | Aktion                   | Ergebnis |
 * |-----------|-----------------------------------|--------------------------|----------|
 * | 1         | firstValue = 4, secondValue = 5   | firstValue > secondValue | 5        |
 * | 3         | firstValue = 5, secondValue = 8   | firstValue > secondValue | 8        |
 * | 4         | firstValue = 8, secondValue = 7   | firstValue > secondValue | 8        |
 * | 5         | firstValue = 8, secondValue = 11  | firstValue > secondValue | 11       |
 * | 6         | firstValue = 11, secondValue = -6 | firstValue > secondValue | 11       |
 */

console.log("höchste Zahl in highestNumber[]: " + highestNumber);

divider("find");

/**
 * @method .find();
 * @description
 * Die Methode .find();gibt den wert des ersten gefundenen elements in der Array zurück,
 * wenn kein eintrag gefunden wird, bekommen wir undefined zurück.
 * @example
 * [ array ].find(callback(wert, index) {});
 * @returns { Array }
 */
const languages = [ "Turkish", "Greek", "German", "Spanish", "Russian" ];

const findLanguage = languages.find(language =>
{
    return language === "Spanish";
});

console.log("gesuchte sprache gefunden in languages[]: " + findLanguage);

divider("every");

/**
 * @method .every();
 * @description 
 * Die Methode .every(); überprüft ob jedes element in der Array einer Kondition entspricht, 
 * und gibt false zurück, falls ein wert fehlschlägt.
 * @example
 * [ array ].every(callback(wert, index) {}));
 * @returns { boolean }
 */
const numbersList = [ -1, -2, -5, 20, 10, 25, 80 ];

const everyCheck = numbersList.every(number =>
{ 
    return number > 0;
});

console.log("jeder wert in numbersList[] ist größer als 0: " + everyCheck);

divider("some");

/**
 * @method .some();
 * @description 
 * Die Methode .some(); ist das gegenteil von .every(); und gibt true zurück, sobald ein wert positiv ist.
 * @example
 * [ array ].some(callback(Wert))
 * @returns { boolean }const 
 */
const someCheck = numbersList.some(number =>
{ 
    return number > 0;
});

console.log("ein oder mehrere Werte in numbersList[] sind größer als 0: " + someCheck);

divider("sort");

/**
 * @method .sort();
 * @description
 * Die Methode .sort(); sortiert eine Array in positiver oder negativer reihenfolge.
 * @example
 * [ array ].sort(callback(wert1, wert2)
 * @returns { array }
 */
// .sort(); sortiert eine array in positiver oder negativer reihenfolge:
let numberArray = [ 1, 3, 2, 6, 4, 5 ];

// In aufsteigender reihenfolge sortieren
const ascendingArray = numberArray.sort((a, b) =>
{
    return a > b ? 1 : -1;
});

console.log("numberArray[] aufsteigend sortiert:");
console.log(ascendingArray);

// In absteigender reihenfolge sortieren
const descendingArray = numberArray.sort((a, b) =>
{
    return a > b ? -1 : 1;
});
// const descendingArray = num.sort( (a, b) => a > b ? -1 : 1 );

console.log("numberArray[] absteigend sortiert:");
console.log(descendingArray);
