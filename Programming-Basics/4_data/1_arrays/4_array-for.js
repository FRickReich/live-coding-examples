// https://love2dev.com/blog/javascript-for-loop-foreach/
// https://www.w3schools.com/js/js_loop_forin.asp

// zusätzlich zu unserem typischen bekannten for-loop gibt es auch noch weitere for-loop typen:
// for/in - loopt durch verschiedene werte, und behält dabei nicht unbedingt die reihenfolge bei.
// for/of - loopt durch die verschiedenen werte mit zählbaren inhalt, in der richtigen reihenfolge.

// for/in ist der typische weg durch objekte oder arrays zu loopen.
// einfach gesagt geht er jeden eintrag durch und gibt ihn aus.

const testArray = [ "a", "b", "c", "d", "e" ];

for (const eintrag in testArray)
{
    console.log( testArray[eintrag] );
}


console.log("=".repeat(50));


// for/of
// der for-of loop ist etwas neuer und wurde mit ES2015 eingeführt.
// er funktioniert nur mit arrays, da er elemente direkt anspricht und durchgeht, 
// wir können also einfach den variablenamen nutzen:
for (const eintrag of testArray)
{
	console.log(eintrag);
}

console.log("=".repeat(50));

// ein anderes beispiel:
for(const buchstabe of "Hello World")
{
    console.log(buchstabe);
}

/** im vergleich sind also die unterschiede zwischen diesen beiden for-loops folgende:
 * 
 * | benutzbar für | for/in | for/off |
 * | Objekte       | ja     | nein    |
 * | Arrays        | ja     | ja      |
 * | Strings       | ja     | ja      |
 * 
*/

console.log("=".repeat(50));

// es gibt auch noch einen etwas moderneren for-loop für objekte und arrays, namens for-each.
// Sie loopt durch den inhalt einer array, und führt jedes mal eine funktion aus.
const fruits = [ "Orange", "Apple", "Strawberry" ];

// wir nutzen foreach wie eine funktion, und fügen sie an unsere variable an,
// fruits.forEach(function(fruit)
// {
//     console.log(fruit);
// });

// oder als arrow function:
fruits.forEach(fruit => console.log(fruit));

// wir können auch einen index mit in die funktion geben:

/**
 * @method fruits.forEach();
 * @description Mit foreach können wir auch einen index mit in die funktion übergeben.
 * @param { string } fruit
 * @param { number } i
 */
fruits.forEach((fruit, i) =>
{
    console.log(`Fruit number ${i + 1} is ${fruit}`);
});
