
// Wenn wir anhand einer funktion etwas auswerten, 
// können wir das ergebnis der funktion ausgeben, dies ist ein sogenanntnes "Return-statement":

const nummer1 = 2;
const nummer2 = 5;

function simpleFunction(ersterInput, zweiterInput)
{
    const ergebnis = ersterInput + zweiterInput;

    return ergebnis;
}

const funktionsErgebnis = simpleFunction(nummer1, nummer2);

console.log(funktionsErgebnis);

console.log("=".repeat(50));

// Beispiel mit einem if-statement
const adultAge = 18;

function checkAge(age)
{
    if(age >= adultAge)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const message = "Bist du schon volljährig? " + (checkAge(18) ? 'Ja' : 'Nein');
console.log(message);

console.log("=".repeat(50));

// Wir können eine funktion mit einem leeren return statement auch direkt unterbrechen:
const tokensLeft = 3;

function playGame(tokens)
{
    if(tokens == 0)
    {
        return;
    }

    console.log("Lass uns spielen!");
}

playGame(tokensLeft);

console.log("=".repeat(50));
