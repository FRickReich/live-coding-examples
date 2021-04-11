/*
Eine bessere methode ist, wenn wir per file-system library die datei lesen, denn dann haben wir die wahl:
- wollen wir die daten konvertieren
- wollen wir dass das programm stoppt bis die datei geladen ist, ODER:
- wollen wir dass das programm weiter läuft, während die datei geladen wird?

ausserdem wird, wenn sich daten in der datei ändern, die datei automatisch neu eingelesen und die informationen angepasst.
*/

// Wir importieren die bibliothek "fs" (file-system):
const fs = require('fs');

console.log("=".repeat(100));

/**
 * @method fs.readFileSync();
 * @description die methode .readFileSync(); liest eine datei ein, und wartet mit der weiteren ausführung des programmes, bis diese datei gelesen wurde.
 * @param { string } path - der pfad zur datei
 * @returns { buffer } der inhalt der datei, in bytes.
 */

// wir lesen die datei ein:
const jsonFile = fs.readFileSync('./beispiel.json');

// Der komplette dateiinhalt wird in den speicher des computers geladen, das bedeutet, das bei großen dateien, das lesen lange dauern kann, und das programm für eine merkbare zeit (sekunden, minuten...) nicht weiter arbeitet. Die gelesenen daten können wir als eine ansammlung von bytes in der konsole sehen:
console.log(jsonFile);

// wir konvertieren den dateiinhalt zu einem JavaScript objekt.
const jsonData = JSON.parse(jsonFile);

// Jetzt können wir die daten als JavaScript objekt nutzen:
console.log(jsonData);
console.log(jsonData.name);

/**
 * @method fs.readFile();
 * @description Im gegensatz zur methode .readFileSync(); blockiert die methode .readFile(); das programm nicht, sondern arbeitet sofort weiter, während es weiterhin im hintergrund an der auslesung der datei arbeitet. Die callback funktion der methode wird dann ausgeführt, wenn die datei fertig geladen wurde.
 * @param { string } path - der pfad zur datei
 * @callback function wird ausgeführt wenn die datei fertig geladen hat.
 */

// um zu überprüfen, wann welcher teil des codes ausgeführt wird, erstellen wir ein paar console.logs() in unserem code:
console.log("position", 1);

fs.readFile('./beispiel.json', function(error, data) 
{
    console.log("position", 2)
    // console.log(JSON.parse(data));
});

console.log("position", 3);

// Das bedeutet dass das programm weiter arbeitet, während es die datei einliest. Dies ermöglicht zum beispiel das anzeigen von ladebalken, wen man zum beispiel das anzeigen des ladebalkens vorm einlesen der datei auf "true" setzt, und innerhalb des callbacks auf "false".

console.log("=".repeat(100));

// Da die methode uns einen inhalt zurück gibt, auch wenn die datei fehler beinhaltet, sollten wir in solchen fällen try/catch nutzen, um eine kaputte json datei abzufangen.

// mit try/catch:
fs.readFile('./beispiel-kaputt.json', function(error, data) 
{
    let newData;

    // prüft ob daten ankamen
    if(data)
    {
        try {
            newData = JSON.parse(data);
        } catch(e) {
            console.log(e);
            newData = "error";
        }
    }

    console.log(newData);
});