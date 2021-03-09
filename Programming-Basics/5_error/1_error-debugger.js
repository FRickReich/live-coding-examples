/*
"Debug:
- Debugging node scripts with chrome: `node inspect <filename>`
- The `debugger;` statement
- Keeping track of state: inspecting scopes in chrome"
*/

// debugger;
// let testNummer = 1;
// debugger;
// console.log("x");
// testNummer = 5;
// debugger;
// console.log("hier");
// testNummer = 9;
// debugger;

const fruits = [ "Banana", "Cherry", "Orange", "Apple", "Strawberry" ];

class FruitBasket
{
    constructor(fruits, owner)
    {
        this.fruits = fruits;

        // was ist "this"?
        // Welche parameter übergeben wir im constructor?
        debugger;
    }

    cycleFruits = () =>
    {
        this.fruits.forEach((fruit, i) =>
        {
            
            // Welche frucht ist gerade selektiert? 
            // an welchem index sind wir?
            // Wie sieht die array Fruits denn eigentlich aus?
            debugger;

            if(fruit === "Orange")
            {
                const tempString = "i want an " + fruit;

                // ist tempString angelegt?
                debugger;

                console.log(tempString);
            }
        });
    }
}

const fruitBasket = new FruitBasket(fruits);

// Wie sieht fruitBasket aus?
debugger;

fruitBasket.cycleFruits();
