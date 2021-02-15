// https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

// destructuring ist eine methode um auf multiple werte aus einer array zuzugreifen.

// haben wir zum beispiel eine array:
const fruits =
[
    "Orange",
    "Strawberry",
    "Apple"
];

// können wir die variablen dieser direkt anlegen, mit einer array als variable:
const [ firstFruit, secondFruit, thirdFruit ] = fruits;

// jetzt können wir auf die werte direkt zugreifen:
console.log(firstFruit);

console.log("=".repeat(50));

// Das ganze funktioniert auch mit return werten aus einer funktion:
function cars()
{
    return [ "VW", "Ford", "BMW"];
}

// wir können in arrays auch default werte einfügen.
const [ firstCar, secondCar, thirdCar, fourthCar = "Opel" ] = cars();
console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(fourthCar);

console.log("=".repeat(50));

// einen wert auslassen können wir mit einem leeren komma:
const books =
[
    "Der Hobbit",
    "James Bond",
    "Sherlock Holmes"
]

const [ bookOne, , bookThree ] = books;
console.log(bookOne);
console.log(bookThree);

console.log("=".repeat(50));

// Ein sehr beliebter, neuer operator in ES6 war der sogenannte "Rest Parameter":
// dieser operator kann den übrigens rest einer array automatisch zuweisen.
const planets =
[
    "Mercury", 
    "Earth",
    "Venus",
    "Mars",
    "Pluto",
    "Saturn"
];

const [ firstPlanet, secondPlanet, thirdPlanet, ...otherPlanets ] = planets;

console.log(firstPlanet)
console.log(secondPlanet);
console.log(thirdPlanet);
console.log(otherPlanets);

console.log("=".repeat(50));

// Wenn der ...(operator) auf der rechten seite steht,
// dann nennnt man ihn den Spread-operator.
// Er nimmt all die anderen elemente innerhalb der array, die keine variable zugewiesen bekommen haben und mappt sie auf den rest der variable.
const users =
[
    "Max",
    "James",
    "Henry",
    "Michael",
    "Richard"
];

const [firstUser, secondUser, ...rest] = ["Max", "James", ...users ];

console.log(firstUser);
console.log(secondUser);
console.log(rest);