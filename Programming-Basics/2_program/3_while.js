// https://www.w3schools.com/js/js_loop_while.asp

// Ein while loop, loopt durch einen code-block, bis die kondition nicht mehr eintritt.
let i = 0;

while (i < 10)
{
    console.log(`i ist ${i}, also unter 10`);
    i++;
}

console.log("=".repeat(50));

// wir können auch mehrere konditionen in einem while-loop checken, 
// oder uns anhand von einem boolean selbst aus einem loop werfen:
let isRunning = true;
let counter = 0;
while(isRunning && counter < 5)
{
    console.log("Running: " + counter);

    if(counter === 2)
    {
        isRunning = false;
    }

    counter++;
}

console.log("=".repeat(50));

// Videospiele nutzen while-loops mit einem Wert von `true` für den "Update-Loop", 
// der jede "Frame" ausgeführt wird.
// bei einem Spiel mit 60FPS (Frames-Per-Second) wird dieser while-loop also 60 mal in der Sekunde ausgeführt.
// im Gegensatz zu einem infinitiven for-loop, kann ein while-loop unterbrochen werden.
// while(true)
// {
//     console.log("update: Spielerposition, Gegnerposition, munition, credits...");
// }