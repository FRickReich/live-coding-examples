/**
 * Destructuring
 * @description
 * Destructuring bedeutet das wir elemente aus Arrays und Objekten extrahieren, also herausnehmen können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
 * @see https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @example
 * [ value, value, ... ] = [ value, value, ... ];
 * @example
 * { key, key, ... } = { key, key, ... };
 */

// Wir erstellen eine array mit werten
const rgb = [ "255", "128", "200" ];

// Wir erstellen auf der linken seite eine array mit variablen, und holen uns die werte aus der anderen array heraus.
const [ red, green, blue ] = rgb;
console.log("red:", red);
console.log("green:", green);
console.log("blue:", blue);

console.log("=".repeat(50));

// Objekte

const userObject = {
    firstName: "Max",
    lastName: "Mustermann"
};

// wenn wir auf der linken seite die namen der schlüssel matchen, erstellen wir damit neue variablen.
const { firstName, lastName } = userObject;

console.log(lastName);

console.log("=".repeat(50));

const fruitObject = {
    fruit: "apple",
    color: "red"
};

// wenn wir auf der linken seite werte zuweisen, erstellen wir neue variablen mit default werten.
const { fruit, color, taste = "sweet" } = fruitObject;

console.log(fruit);
console.log(color);
console.log(taste);

console.log("=".repeat(50));

const carObject = 
{
    manufacturer: "Ford",
    model: "Kuga",
    year: "2019",
    wheels: [
        "FrontLeft", 
        "FrontRight",
        "RearLeft",
        "RearRight"
    ]
}

// Wenn wir auf elemente in einer array zugreifen wollen, benennen wir die einzelnen indexpositionen mit variablennamen.

const { manufacturer, model, year, wheels: [ frontLeft, frontRight, rearLeft, rearRight ] } = carObject;

console.log(manufacturer);
console.log(model);
console.log(year);
console.log(frontLeft);

console.log("=".repeat(50));

// // Wir können auch variablen mit werten aus einem element befüllen:
let consoleName = 'PlayStation';
let consoleBrand = "Sony";
let consoleYear = 2020;

console.log(consoleName);
console.log(consoleBrand);
console.log(consoleYear);

const consoleObject = {
    consoleName: 'XBox',
    consoleBrand: 'Microsoft'
};

// // Wenn wir unsere deklaration in klammern setzen, könenn wir die vorhandenen variablen mit den neuen werten aus dem objekt ersetzen.
({ consoleName, consoleBrand } = consoleObject);

console.log(consoleName);
console.log(consoleBrand);
console.log(consoleYear);

console.log("=".repeat(50));

const countryObject = 
{
    name: "Germany",
    city: "Berlin"
}

// wenn wir die vorhandenen variablen mit anders benannten variablen überschreiben wollen, geben wir den veränderten namen einfach auf der rechten seite an
const { name: countryName, city: capitolCity, continent: location = "europe" } = countryObject;

console.log(countryName);
console.log(capitolCity);
console.log(location);

