// https://www.w3schools.com/js/js_objects.asp

/*
    Objects: Saving multiple variables in one namespace
    - The type of an array: arrays are specific objects, `Array.isArray()`
    - Object literals: Property definition
        `const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }`
    - Accessing properties with bracket notation (no variables)
    - Accessing properties with dot notation"
*/

// Ein object in javascript ist eine sammlung von werten, die bearbeitet werden können.
// In JavaScript ist fast alles ein objekt.

// Als beispiel stellen wir uns mal ein auto vor, ein auto hat werte wie 
// - Hersteller, Name, Farbe, Gewicht, Pferdestärke

// wir könnten ja einfach in der javascript datei feste werte zuweisen:
const manufacturer = "Ford";
const model = "Kuga";
const color = "red";
const weight = 1760;
const horsePower = 150;

// Dann können wir die werte ausgeben:
console.log(manufacturer);
console.log(model);

console.log("=".repeat(50));

// Allerdings können wir mit geschwungenen klammern auch objekte anlegen, in die wir unsere werte einfügen:
// Wir geben immer einen namen (der sogenannte schlüssel, oder key) und einen wert, der sogenannnten "property" an, wie in JSON (JavaScript Object Notation):
const car =
{
    manufacturer: "Ford",
    model: "Kuga",
    color: "red",
    weight: 1760,
    horsePower: 150    
};

// Ein anderes beispiel wäre zum Beispiel ein Benutzer, oder User.

const user = 
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "Germany",
    isAdmin: false
}

// wir können uns das objekt ausgeben und sehen die verschiedenen informationen aufgelistet in der konsole:
console.log(user);

console.log("=".repeat(50));

// Auf die werte innerhalb des objekts können wir jetzt ganz einfach zugreifen:
// Entweder, ähnlich wie bei Arrays, mit eckigen klammern und dem namen der information:
console.log(user["age"]);

// Oder wie bei methoden, mit dem namen direkt hinter einem punkt, autocomplete zeigt es uns sogar an:
console.log(user.isAdmin)

console.log("=".repeat(50));

// um die vorhandenen keys eines objektes aufzulisten, 
// können wir das Keys keyword von Object nutzen, dies gibt uns eine array mit den keys aus.
console.log(Object.keys(user));

// genau auf die selbe weise können wir auch die werte auslesen, mit values.
console.log(Object.values(user));