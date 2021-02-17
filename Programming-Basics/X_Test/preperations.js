// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript

const divider = (inputString) => 
{
    console.log(`\n${"=".repeat(25)} ${inputString} ${"=".repeat(25)}`);
}

const stringArray = [ "A", "B", "C" ];
const incompleteArray = [ "A", , "C" ];

divider("for");

/**
 * for
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for
 * @description
 * for erstellt einen loop, anhand von 3 statements:
 * - startposition
 * - kondition
 * - iterator
 * und führt jeden durchlauf den inhalt des codeblocks aus.
 * @example
 * for(let i = 0; i < [ array ].length; i++) {}
 */
for(let i = 0; i < stringArray.length; i++)
{
    console.log("stringArray[]: ", stringArray[i], i);
}

for(let i = 0; i < incompleteArray.length; i++)
{
    console.log("incompleteArray[]: ", incompleteArray[i], i);
}

divider("for/in");
/**
 * for/in
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in
 * @description
 * Das for/in statement arbeitet in jedem loop mit dem aktuellen index der array.
 * for/in überspringt leere werte.
 * @example
 * for(let i in [ array ]) {}
 */
for(element in stringArray)
{
    console.log("stringArray[]: ", stringArray[element], element);
}

for(element in incompleteArray)
{
    console.log("incompleteArray[]: ", incompleteArray[element], element);
}

divider("for/of");
/**
 * for/of
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...of
 * @description
 * Das for/of statement arbeitet in jedem loop direkt mit dem aktuellen wert der array.
 * @example
 * for(value in [ array ]) {}
 */
for(element of stringArray)
{
    console.log("stringArray[]: ", element);
}

for(element of incompleteArray)
{
    console.log("incompleteArray[]: ", element);
}

divider(".forEach();");
/**
 * forEach
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @description
 * .forEach(); führt für jeden wert in einer array eine funktion durch und überspringt leere elemente.
 * @example
 * [ array ].forEach(function(value, i) {});
 * @returns { undefined }
 */
stringArray.forEach((element, i) =>
{
    console.log("stringArray[]: ", element, i);
});

incompleteArray.forEach((element, i) =>
{
    console.log("incompleteArray[]: ", element, i);
});

// sichtbarer unterschied zwischen for in und for of
let testArray = [ "A", "B", "C" ];

for (let i in testArray)
{
    // console.log(testArray[i]);
    console.log(i);
}

for (let i of testArray)
{
   console.log(i);
}