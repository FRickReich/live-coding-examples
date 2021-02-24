/**
 * Object.seal();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 * @description
 * Die Methode Object.seal(); sorgt dafür das keine neuen properties mehr zu einem Objekt hinzufügt oder von einem objekt gelöscht werden können.
 * @param { object } 
 * @returns { object }
 */
const sealObject =
{
    firstname: "Max",
    lastName: "Mustermann"
}

console.log(sealObject);

// wir fügen age hinzu...
sealObject.age = 25;

// ... und sehen das age im objekt angelegt wurde
console.log(sealObject);

// wir "sealen" das objekt:
Object.seal(sealObject);

// wir fügen country hinzu ...
sealObject.country = "Germany";

// ... und sehen das es nicht teil des objektes ist
console.log(sealObject);

// wir löschen age...
delete sealObject.age;

// ... und sehen das es immernoch vorhanden ist.
console.log(sealObject);

console.log("=".repeat(50));

/**
 * Object.isSealed();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
 * Die Methode Object.isSealed(); prüft ob ein object "sealed" ist, und gibt einen boolean zurück
 * @param { object }
 * @returns { boolean }
 */
console.log(Object.isSealed(sealObject));

console.log("=".repeat(50));

/**
 * Object.freeze();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @description
 * Die Methode Object.freeze(); "friert" ein objekt ein, was bedeutet es kann nicht mehr verändert werden.
 * @param { object } Das einzufrierende Objekt
 * @returns { object } Das eingefrorene Objekt
 */
const freezeObject =
{
    firstname: "James",
    lastName: "Bond"
}

console.log(freezeObject);

// Wir ändern den wert von lastName ...
freezeObject.lastName = "Steward";

// ... und sehen, das die änderung funktioniert hat:
console.log(freezeObject);

// Wir frieren das Objekt ein...
Object.freeze(freezeObject);

// ... und ändern den wert von lastName wieder ... 
freezeObject.lastName = "Dean";

// ...jetzt sehen wir, das der wert sich nicht verändert hat.
console.log(freezeObject);

console.log("=".repeat(50));

/**
 * Object.isFrozen();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
 * Die Methode Object.isFrozen(); prüft ob ein object "frozen" ist, und gibt einen boolean zurück
 * @param { object }
 * @returns { boolean }
 */
console.log(Object.isFrozen(freezeObject));

console.log("=".repeat(50));

// Unterschied zwischen Object.seal(); und Object.freeze();
// Vorhandene Eigenschaften in Objekten, die mit Object.seal() versiegelt wurden, können geändert werden. Vorhandene properties in Objekten, die mit Object.freeze() eingefroren wurden, werden unveränderlich gemacht.

/**
 * Object.isExtensible();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
 * @description
 * Die Methode Object.isExtensible(); prüft ob ein objekt veränderbar ist, ob es also "frozen" oder "sealed" ist und gibt einen boolean zurück.
 * @param { object }
 * @returns { boolean }
 */
const extensibleObject = 
{
    firstName: "Bilbo",
    lastName: "Baggins"
}

console.log(Object.isExtensible(extensibleObject));
console.log(Object.isExtensible(sealObject));
console.log(Object.isExtensible(freezeObject));