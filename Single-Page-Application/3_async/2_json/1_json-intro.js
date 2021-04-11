// JSON ist ein text-datenformat das der javascript object syntax folgt, obowhl es dieser syntax folgt, kann es auch ausserhalb von javascript benutzt werden. Viele programmiersprachen und tools besitzen die fähigkeit json zu lesen oder zu schreiben, weswegen es sich sehr gut eignet um konfigurationen für programme oder entwicklungsumgebungen zu definieren. JSON dateien erkennt man an der dateiendung .json.

// Da json dokumente aus text bestehen, müssen sie für javascript erst zu einem objekt umgewandelt werden, oder von javascript aus zu json umgewandelt werden, dafür besitzt JavaScript das sogenannte JSON object, mit diesem kann man PARSEN (json zu javascript umwandeln) und stringifien (von Javascript zu JSON umwandeln).

// JSON Bearbeiten:

/**
 * @method JSON.parse();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 * @description Die methode .parse(); konvertiert einen string zu json, es ist sehr wichtig, das dieser string sich an die JSON syntax hält.
 * @param { string } - der json string, den wir umwandeln wollen
 * @returns { object } - das umgewandelte JavaScript Objekt
 */

// Wir erstellen einen beispielString...
const jsonParseExample = '{ "isValid": true, "amount": 15, "name": "Max" }';

// ...und nutzen die methode .parse(); um den string zu einem objekt zu konvertieren:
const convertedJson = JSON.parse(jsonParseExample);

// jetzt können wir die daten wie bei einem objekt verwenden:
console.log(convertedJson);
console.log(convertedJson.isValid);
console.log(convertedJson.amount);
console.log(convertedJson.name);

console.log("=".repeat(100));

/**
 * @method JSON.stringify();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * @description Die methode .stringify(); konvertiert ein JavaScript objekt zu einem json-kompatiblen string.
 * @param { object } value - das JavaScript Objekt, das wir umwandeln wollen.
 * @param { array } replacer - optional kann man hier eine array angeben, die bestimmt welche werte bei der konvertierung übernommen werden.
 * @param { number } space - die anzahl von leerzeichen im string am anfang der parameter.
 * @returns { string } - der JSON kompatible string
 */

// Wir erstellen ein JavaScript Objekt...
const objectExample = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    isAdmin: false
}

console.log(objectExample);

// und konvertieren dieses objekt per .stringify(); zu einem json string:
const convertedObject = JSON.stringify(objectExample);
console.log(convertedObject);

// Erweitertes beispiel:
                                      // object         werte                 leerzeichen (oder '\t' für ein TAB)
const convertedObject2 = JSON.stringify(objectExample, [ "firstName", "age" ], 4);
console.log(convertedObject2);


// JSON DATEI

/*
Wir erstellen eine erste json datei, beispiel.json und füllen sie mit ein paar informationen:
{
    "name": "Michael Knight",
    "car": "KITT"
}

Wie schon erwähnt ähnelt JSON der javascript objekt syntax. Booleans, nummern, strings und Objekte und Arrays können wir ohne probleme in JSON nutzen, der einzige sichtbare unterschied ist, das wir parameterschlüssel auch als string hinterlegen müssen, also in "gänsefüßen".
*/

console.log("=".repeat(100));

// JSON Datei laden

// Um eine lokale JSON datei zu laden reicht es, wenn wir sie per .require(); oder Import anfordern.
const jsonFile = require('./beispiel.json');

// durch diese methode wird die dateie automatisch in ein javascript objekt umgewandelt und Wir können die daten jetzt nutzen wie bei einem objekt:
console.log(jsonFile);
console.log(jsonFile.car);

// Dieser weg wird nicht empfohlen, da während des ladens der JSON datei das programm nicht weiter läuft, und änderungen in der datei auch nicht mitbekommt.
