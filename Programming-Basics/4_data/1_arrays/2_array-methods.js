// Wir können inhalte von arrays auch verändern.

const carBrands = [ "BMW", "Ford", "Volvo", "Toyota" ];

// interessant ist, das eine Array ein const sein kann, und trotzdem verändert werden kann.

console.log(carBrands);

console.log("=".repeat(50));

// indem wir die position wie vorher ansprechen und wie eine variable behandeln können wir den wert ändern:
carBrands[0] = "Volkswagen";

console.log(carBrands);

console.log("=".repeat(50));

// um unserer Array etwas hinzuzufügen, nutzen wir einen befehl namens .push();, dieser fügt am ende der array ein element hinzu.

carBrands.push("Jaguar");

console.log(carBrands);
console.log("=".repeat(50));

// mit dem .pop(); befehl, löschen wir das element an der letzten stelle der array.
carBrands.pop();

console.log(carBrands);

console.log("=".repeat(50));

// mit dem .shift(); befehl löschen wir das erste element in unserer array.
carBrands.shift();

console.log(carBrands);

console.log("=".repeat(50));
// "Basic Array methods:
// - Finding Items: `Array.prototype.indexOf(<item>)`
// - Adding items: `Array.prototype.push()`, `Array.prototype.unshift()`
// - Removing items: `Array.prototype.pop()`, `Array.prototype.shift()`
// - Manipulating arrays: `Array.prototype.reverse()`"

// mit dem .unshift(); befehl können wir am anfang ein element hinzufügen.
carBrands.unshift("Opel")

console.log(carBrands);

console.log("=".repeat(50));

// der .reverse(); befehl dreht die inhalte einer array um.
carBrands.reverse();

console.log(carBrands);

console.log("=".repeat(50));
