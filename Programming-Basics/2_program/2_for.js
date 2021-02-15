// https://cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png
// https://www.programiz.com/javascript/for-loop

// Simpler for-loop mit Iteration, zeigt text 5 mal an.
let counter = 5;

for (let i = 0; i < counter; i++)
{
    console.log(`Hallo Welt!`);
}

// statement 1: let i = 0;   = wird einmal ausgeführt, bevor der block ausgeführt wird und legt den anfang der iteration fest.
// statement 2: i < counter; = definiert die konditionen zum ausführen des code blocks.
// statement 3: i++          = wird nach jedem durchlauf des code-blocks ausgeführt.

// logik:
// wo fängt der zähler an?  0
// ist die kondition eingetroffen um zu wiederholen?    i ist weniger als 5
// wurde der code-block ausführt? wenn ja, erhöhe i um 1, und wiederhole den code-block.

/**
 * Wir können uns das ganze auch mal zur vereinfachung als tabelle vorstellen:
 *
 * | Iteration | Variable | Kondition      | Aktion                  |
 * |-----------|----------|----------------|-------------------------|
 * | 1         | i = 0    | 0 < 5 == true  | console.log(...); i = 1 |
 * | 2         | i = 1    | 1 < 5 == true  | console.log(...); i = 2 |
 * | 3         | i = 2    | 2 < 5 == true  | console.log(...); i = 3 |
 * | 4         | i = 3    | 3 < 5 == true  | console.log(...); i = 4 |
 * | 5         | i = 4    | 4 < 5 == true  | console.log(...); i = 5 |
 * | 6         | i = 5    | 5 < 5 == false | break;                  |
*/


// Kleiner Tipp für trennung von Aufgaben:
console.log("=".repeat(50));

// wir können unsere variable i, 
// die wir innerhalb der loop statements angelegt haben auch innerhalb des code-blocks benutzen.
for (let i = 0; i < counter; i++)
{
    console.log(`Eintrag: ${i}`);
}

console.log("=".repeat(50));

// Simpler for-loop mit iteration mit sinnvoller nummerierung:
for (let i = 0; i < counter; i++)
{
    console.log(`Eintrag: ${i + 1}`);
}

console.log("=".repeat(50));

// Wir können eine for loop auch anhand von bestimmten konditionen unterbrechen:
counter = 20;
const breakPoint = 11;

for (let i = 0; i < counter; i++)
{
    
    if(i == breakPoint)
    {
        console.log(`Der counter wurde unterbrochen!`);

        // mit break; können wir, genau wie in switches, einen loop unterbrechen.
        break;
    }

    if(i == 4)
    {
        // mit continue; können iterationen übersprungen werden.   
        continue;
    }

    console.log(`Eintrag: ${i + 1}`);
}

console.log("=".repeat(50));

// wir können auch mehrere for-loops ineinander verschachteln, um zum beispiel eine tabelle zu füllen:
let rows = 5;
let columns = 5;

for (let i = 0; i < rows; i++)
{
    for (let j = 0; j < columns; j++)
    {
        console.log(`row: ${i} | column: ${j}`);
    }
}

console.log("=".repeat(50));

// Ein unendlicher loop wird so lange laufen
// bis der speicher voll ist und sollte deswegen so nicht ausgeführt werden!!!
// for(let i = 1; i > 0; i++)
// {
//     console.log("Bis zur unendlichkeit, und noch viel weiter!");
// }
