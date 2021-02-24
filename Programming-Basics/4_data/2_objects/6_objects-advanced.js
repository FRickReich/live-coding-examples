
/**
 * Object.assign();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @description
 * Die Methode Object.assign(); kopiert properties von einem Objekt und fügt sie einem zielobjekt hinzu.
 * @param { object } Das Zielobjekt
 * @param { object } Das input Objekt
 * @returns { object } Das veränderte Zielobjekt
 */
const zielObjekt = { a: 1, b: 2 };
const anderesObjekt = { c: 3, d: 4 };

console.log(zielObjekt);

const newObject = Object.assign(zielObjekt, anderesObjekt);
console.log(newObject);

console.log(zielObjekt);

// Eigenschaften des zielobjekts, die das neue objekt auch hat, werden überschrieben:
const nochEinObject = { a: 5, d: 2, e: 8};

Object.assign(zielObjekt, nochEinObject);
console.log(zielObjekt);

console.log("=".repeat(50));

/**
 * Object.entries();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @description
 * Die Methode Object.entries(); gibt jedes keys und values paar der properties eines objektes als array zurück.
 * @param { object } Das objekt, dessen properties wir auslesen wollen
 * @returns { Array } Ein neues Object
 */
const objectEntries = Object.entries(zielObjekt);
console.log(objectEntries);

// Object.entries(objectEntries).forEach(([key, value]) => console.log(`${key}: ${value}`));

console.log("=".repeat(50));

/**
 * Object.fromEntries();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * @description
 * Im gegenteil zu Object.entries(); erstellt die Methode Object.fromEntries(); auf basis von Arrays für keys und values ein neues Objekt.
 * @param { array } Die array zur erstellung des objektes
 * @returns { object }
 */
const newObjectFromEntries = Object.fromEntries(objectEntries);
console.log(newObjectFromEntries);

console.log("=".repeat(50));

/**
 * Object.defineProperty();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @description
 * Die Methode Object.defineProperty(); erstellt oder verändert eine property in einem Objekt.
 * @param { object } obj - Das Objekt das wir verändern wollen
 * @param { string } name - Name der property
 * @param { object } value - Der wert oder die werte den die property übernehmen soll
 * @returns { object }
 */
const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    country: "Germany"
}

console.log(user);

// // // Wenn wir eine property ändern wollen, können wir dies direkt auf dem objekt machen.
Object.defineProperty(user, "country", { value : "Russia" });
console.log(user);

// // // Wenn wir eine property hinzufügen wollen, können wir einige optionen angeben:
// unter anderem:
// - enumerable = die property wird in der ausgabe angezeigt oder nicht.
// - writable = die property ist überschreibbar oder nicht. 
Object.defineProperty(user, "userName", { 
    value : "TestUser1234", 
    enumerable: true,
    writable: true
});
console.log(user);

user.userName = "NewTestUser"; 

console.log(user);






































// Object.defineProperty(user, "country", { value : "Russia" });
// console.log(newUser);

// const newUser = Object.defineProperties(user, "username", { value: "TestUser1234" });
// Object.defineProperty(person, "language", {writable:false});

