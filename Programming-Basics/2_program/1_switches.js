// https://love2dev.com/blog/javascript-switch-statement/

const testValue = 3;

// Beispiel mit 'default' Wert:
switch(testValue) {
    case 1:
        console.log("testValue ist 1");
        break;
    case 2:
        console.log("testValue ist 2");
        break;
    default:
        console.log("testValue hat einen anderen wert");
}

// Switches vergleichen strict, mit ===
const testValue2 = "0"; // funktioniert: const testValue2 = 0;

switch (testValue2) {
  case 0:
    console.log("Off");
    break;
  case 1:
    console.log("On");
    break;
  default:
    console.log("No value found");
}


// Mehrere switch statements - Wochenbeispiel:
const today = "Sunday"

switch (today) {
    case "Monday":
        console.log("Today is Sunday");
        break;
    case "Tuesday":
        console.log("Today is Sunday");
        break;
    case "Wednesday":
        console.log("Today is Sunday");
        break;
    case "Thursday":
        console.log("Today is Sunday");
        break;
    case "Friday":
        console.log("Today is Sunday");
        break;
    case "Saturday":
        console.log("Today is Sunday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
}

// Mehrere cases für das selbe ergebnis, wochenend/arbeitswochen-Beispiel:
const dayOfWeek = "Monday";

switch (dayOfWeek.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    default:
        console.log("Arbeiten...");
        break;
    case "saturday":
    case "sunday":
        console.log("Wochenende!");
}