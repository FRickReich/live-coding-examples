
// zusätzlich zu unserem typischen bekannten for-loop gibt es auch noch weitere for-loop typen:
// for/in - loopt durch verschiedene werte.
// for/of - loopt durch die verschiedenen werte eines objektes mit zählbaren inhaltes.

// for/in ist der typische weg durch objekte oder arrays zu loopen.
// einfach gesagt geht er jeden eintrag durch und gibt ihn aus.
const testObjekt =
{
    a: 1,
    b: 2,
    c: 3
}

for (const eintrag in testObjekt)
{
    console.log( testObjekt[eintrag] );
}

const testArray = [ "a", "b", "c", "d", "e" ];

for (const eintrag in testArray)
{
    console.log( testArray[eintrag] );
}

console.log("=".repeat(50));

// das geht natürlich auch mit aussagekräftigeren informationen als buchstaben:
const user =
{
	firstName: "Max",
	lastName: "Mustermann",
	age: 25
}

for (const info in user)
{
	console.log(user[ info ]);
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
fruits.forEach((fruit, i) =>
{
    console.log(`Fruit number ${i + 1} is ${fruit}`);
});

// map     ?
// indexOf ?