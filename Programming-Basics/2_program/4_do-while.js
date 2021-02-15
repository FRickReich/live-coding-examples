
// do/while
// Bei einem normalen loop wird erst gecheckt, ob die kondition zutrifft oder nicht,
// und dann der code-block ausgeführt.
let counterWhile = 8;
while (counterWhile < 5)
{
    console.log('Der counter steht auf ' + counterWhile);
    
    counterWhile++;
}

console.log("=".repeat(50));

// der Do/While loop ist eine variante des while loops, der erst den code-block ausführt und danach erst checkt ob die kondition zutrifft.
// Dieses beispiel wird mindestens einmal ausgeführt, auch wenn die kondition nicht zutrifft.
let counterDoWhile = 8;
do {
    console.log('Der counter steht auf ' + counterDoWhile);
    
    counterDoWhile++;
}
while (counterDoWhile < 5);
