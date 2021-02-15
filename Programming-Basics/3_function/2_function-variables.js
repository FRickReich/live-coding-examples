
// Eine variable die innerhalb einer funktion angelegt wird, nennt sich "Lokale Variable" und ist nur in dessen code-block nutzbar.
function showMessage()
{
    const message = "Ich bin eine lokale Variable";
  
    console.log(message);
}

showMessage();

// console.log(message);

console.log("=".repeat(50));

// Andersherum kann eine Funktion auf eine Externe Variable, also eine variable die von ausserhalb der funktion kommt, zu greifen.
let userName = 'Max';

function welcomeMessage()
{
    let message = 'Welcome, ' + userName;
  
    console.log(message);
}

welcomeMessage();

console.log("=".repeat(50));

// Eine funktion kann auf externe variablen nicht nur zugreifen, sondern diese auch ändern.
console.log("userName: " + userName);

function WelcomeMessage2()
{
    userName = "James";

    let message = 'Welcome, ' + userName;
  
    console.log(message);
}

WelcomeMessage2();

console.log("userName: " + userName);

console.log("=".repeat(50));

// innerhalb von funktionen können wir die gleichen variablennamen nutzen wie ausserhalb, 
// da wir innerhalb der funktion eine lokale variable erstellen.
let value = 5;
console.log("value aussen: " + value);

function changeValue()
{
    let value = 10;

    console.log("value innen:  " + value);
}

changeValue();

console.log("value aussen: " + value);