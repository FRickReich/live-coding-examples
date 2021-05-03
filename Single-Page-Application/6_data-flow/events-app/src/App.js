// 1. wir ändern die app zu einer komponente um, die einer unserer aufgaben sehr ähnlich ist.
// 2. Wir können auch parameter an den event-handler übergeben, dafür müssen wir ihn mit einer anonymen funktion aufrufen.
// 3. wir können auch andere events, wie onchange nutzen, in dem wir übergeben wollen, was momentan geschrieben wird.

// Mehr informationen zu events in react: https://de.reactjs.org/docs/events.html

import React, { useState } from 'react';

function App()
{
    // 1. Wir erstellen einen state hook, den ich auf false setze.
    const [ isToggled, setIsToggled ] = useState(false);

    // 2. Wir erstellen einen weiteren hook, nennen wir ihn book
    const [ book, setBook ] = useState("Harry Potter");

    // 3. wir erstellen einen state hook, in dem wir den aktuellen text speichern wollen, und initialiseren ihn mit einem leeren string
    const [ textValue, setTextValue ] = useState("");

    // 1. In react rufen wir addEventListener nie selber auf, sondern erstellen eine funktion, der wir event übergeben. So stellen wir eine funktion zur verfügung, die ein event ausführen kann.
    function handleClick(e)
    {
        e.preventDefault();

        // 1. es gibt sogar eine methode, mit der wir prüfen können, ob ein event mit preventDefault bestückt wurde.
        console.log(e.defaultPrevented);

        // 1. Ich erstelle einen toggle, um unseren state umzuschalten
        setIsToggled(!isToggled);
    }

    // 2. Wir erstellen eine weitere event-funktion, in der wir den wert von book ändern, diesmal übergeben wir einen zweiten parameter.
    function handleBookChange(e, bookName)
    {
        e.preventDefault();

        // 2. wir können das aktuelle event target element ausgeben
        console.log(e.currentTarget);

        // 2. Wir geben bookName an setBook weiter.
        setBook(bookName);
    }

    // 3. wir erstellen eine event-funktion namens handleclick, in der wir den aktuellen wert des inputs an den state übergeben.
    function handleTextChange(e)
    {
        setTextValue(e.target.value)
    }
    

    return (
        <div style={{ textAlign: "center"}}>

            <h1>Events in React</h1>

            <h2>1. onClick</h2>
            <p style={{ fontWeight: "bold" }}>{ isToggled ? "AN" : "AUS" }</p>

            {/* 1. wir erstelle ein klickbares element, in dem wir handleclick übergebe */}
            {/* onClick={ handleClick } anstelle von onclick="handleClick()" */}
            <a href="#" onClick={ handleClick }>
                Klick!
            </a>

            <h2>2. onClick mit parameterübergabe</h2>

            {/*2. Wir erstellen ein textelement, das den buchnamen ausgibt */}
            <p>Das aktuelle Buch ist <b>{ book}</b></p>

            {/* 2. Wir erstellen ein weiteres klickbares element, dieses mal übergeben wir einen wert mit einer anonymen funktion */}
            <a href="#" onClick={(e) => handleBookChange(e, "Casino Royale") }>Anderes Buch anzeigen</a>

            <h2>3. onChange</h2>
            {/* 3. Wir erstellen ein input Element das wir mit einem onChange event ausstatten */}
            <input onChange={handleTextChange} />

            {/* 3. Wir erstellen ein p element, in das wir den aktuellen text übergeben. */}
            <p>Der Eingegebene Text ist: <b>{ textValue }</b></p>

            {/* 3. da wir den wert des text-inputs als state speichern, können wir es auch in input felder als value übergeben */}
            Wir kopieren den text in ein inputfeld:<br/> 
            <input readOnly value={ textValue }></input>


        </div>
    );
}

export default App;
