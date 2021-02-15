// Um daten und werte an eine funktion zu übergeben, können wir diese festlegen und dann mit dem funktionsaufruf übergeben
// dabei erstellen wir eine lokale variable, die den übergebenen wert beinhaltet.
function showMessage(text)
{
    console.log(text);
}

// Beim funktionsaufruf fügen wir den gewollten wert ein.
showMessage("Dies ist eine Nachricht!");

console.log("\n" + "=".repeat(50) + "\n");

// Wir können beliebig viele werte an eine funktion übergeben:
function chatMessage(user, message)
{
    console.log(user + ": " + message)
}

const user = "Max";
const message = "Hallo, wie geht es dir heute?";
chatMessage(user, message);

console.log("\n" + "=".repeat(50) + "\n");

// Auf die übergebenen werte können wir zugreifen, und sie auch ändern:
function chatMessage2(user, message)
{
    user = "===> " + user;
    console.log(user + ": " + message)
}

chatMessage2(user, message);

console.log("\n" + "=".repeat(50) + "\n");

// Mit sogenannten default values können wir werte festlegen,
// die für variablen genutzt werden bei denen wir keinen wert übergeben.
function newMessage(user, message = "Max hat nichts geschrieben...")
{
    // theoretisch: message = message || "Max hat nichts geschrieben...";
    
    console.log(user + ": " + message);
}

newMessage(user);

console.log("=".repeat(50) + "\n");

// Eine funktion kann auch sich auch selbst, rekursiv, innerhalb des code-blocks aufrufen:
function countDown(number) {
    
    if (number === 0) {
		return;
	}

    console.log(number);    
    countDown(number - 1);
}

countDown(5);

console.log("\n" + "=".repeat(50) + "\n");

function countUp(number, max) {
    
    if (number === max + 1) {
		return;
	}

    console.log(number);    
    countUp(number + 1, max);
}

countUp(1, 5);

