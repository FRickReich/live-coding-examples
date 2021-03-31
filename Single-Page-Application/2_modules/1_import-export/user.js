// es gibt noch eine andere art des imports, mit der wir uns alle werte, funktionen, klassen oder sonstwas als namespace elemente holen.
// dafür legen wir ein paar variablen an, und exportieren sie benannt.

const firstName = "Max";
const lastName = "Mustermann";
const age = 25;
const roles = [ "Member", "Admin " ];

export { firstName, lastName, age, roles };
