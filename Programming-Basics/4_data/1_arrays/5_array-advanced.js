
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
console.log(arrayComplete);

console.log("=".repeat(50));

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
console.log(findColor1);

// wir suchen die farbe purple
const findColor2 = colors.indexOf("purple");
console.log(findColor2);

// wir suchen die farbe "blue" und fangen mit der suche bei position 3 an.
const findColor3 = colors.indexOf("blue", 4); // weniger als 4 - als test;
console.log(findColor3);

console.log("=".repeat(50));

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
console.log("found green: " + colors.includes("green"));

// wir wollen wissen ob die farbe purple in der array vorhanden ist.
console.log("found purple: " + colors.includes("purple"));

console.log("=".repeat(50));

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

console.log(newNumberList);

console.log("=".repeat(50));


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

console.log(newDrinkList);

console.log("=".repeat(50));

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

console.log(findLanguage);

console.log("=".repeat(50));

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

/**
 * @method .some();
 * @description 
 * Die Methode .some(); ist das gegenteil von .every(); und gibt true zurück, sobald ein wert positiv ist.
 * @example
 * [ array ].some(callback(Wert))
 * @returns { boolean }
 */
const someCheck = numbersList.some(number =>
{ 
    return number > 0;
});

console.log("every: " + everyCheck);
console.log("some: " + someCheck);

console.log("=".repeat(50));

// .sort(); sortiert eine array in positiver oder negativer reihenfolge:
let numberArray = [ 1, 3, 2, 6, 4, 5 ];

// In aufsteigender reihenfolge sortieren
const ascendingArray = numberArray.sort((a, b) =>
{
    return a > b ? 1 : -1;
});

console.log(ascendingArray);

// In absteigender reihenfolge sortieren
const descendingArray = numberArray.sort((a, b) =>
{
    return a > b ? -1 : 1;
});
// const descendingArray = num.sort( (a, b) => a > b ? -1 : 1 );

console.log(descendingArray);
