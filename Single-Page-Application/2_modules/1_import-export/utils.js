// 1. wir erstellen eine funktion um einen wert zu mal 2 zu nehmen.
const getTimesTwo = (val) =>
{
    return val * 2;
}

// 2. wir erstellen Eine funktion um einen wert mal 4 zu nehmen
const getTimesFour = (val) =>
{
    return val * 4;
}

// 3. wir erstellen Eine funktion um etwas anzuzeigen.
const buildPage = (obj) =>
{
    const appElement = document.getElementById("app");
    appElement.innerHTML = `
    <ul>
        <li>testwert 1: ${ obj.timesTwo }</li>
        <li>testwert 2: ${ obj.timesFour }</li>
    </ul>`
}

// 4. Hier exportieren wir mit sogenannten named exports.
export {
    // 5. wir können ihre namen so nutzen wie wir sie angelegt haben ...
    getTimesTwo,
    getTimesFour,
    // 6. ... aber ihren namen mit "as" auch ändern.
    buildPage as makePage
}
