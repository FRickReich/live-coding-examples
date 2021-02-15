// https://javascript.info/function-basics

// Eine simple funktion:
// function showMessage() {
//     console.log('Hello World!');
// }

// alternativ:
const showMessage = function()
{
    console.log('Hello World!');
}

// damit der code ausgeführt wird, müssen wir die funktion aufrufen,
// dies ist der so genannte "function call",
// andernfalls wird der code-block innerhalb der funktion nicht ausgeführt.
showMessage();

console.log("=".repeat(50));

// Eine funktion können wir auch mehrfach aufrufen, und müssen code so nicht wiederholen.
showMessage();
showMessage();
showMessage();

console.log("=".repeat(50));

// Eine funktion kann sich auch selber starten, das nennt man dann eine Rekursive Funktion,
// dies können wir erreichen, indem wir die funktion in klammern setzen, und am ende noch einmal klammern hinzufügen.
const recursiveFunction = (function()
{
    console.log("Ich hab mich selbst aufgerufen!");
}());