// Eine higher-order-function ist eine funktion die eine andere funktion als wert bekommt, 
// oder eine andere funktion als return nutzt.
// Higher bedeutet hier, das sie weiter in die funktionalität hereingeht als strings, booleans und nummern.
// Im deutschen würd ich sagen "higher order functions" gehen "tiefer" in die materie hinein... 

const getUserName = function(userName)
{
    return userName;
}

const welcomeMessage = (userName, message) => userName + " " + message;

const message = "ist online!";

const output = welcomeMessage(getUserName("Max"), message);
console.log(output);
