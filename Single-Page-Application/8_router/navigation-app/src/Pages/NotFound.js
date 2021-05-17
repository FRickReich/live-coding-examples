import React from 'react';

// Wir importieren den useHistory hook von react-router-dom
import { useHistory } from "react-router-dom";

const NotFound = () => 
{
    // jetzt setzen wir den useHistory hook auf die variable history
    const history = useHistory();

    return (
        <div>
            <h1>404</h1>

            <p>Seite nicht gefunden!</p>

            {/* Wir erstellen einen button, bei dem wir history push benutzen, womit wir in der lage sind, uns zu einer anderen seite zu bewegen */}
            {/* der from parameter ist dazu da, der erreichten seite mitzuteilen, wo wir gerade herkommen */}
            <button  onClick={() => history.push("/")}>Zurück zur Startseite</button>

            {/* Wenn wir nicht zu einer spezifischen seite wollen, sondern nur zurück zur vorherigen, können wir die methode .goBack() nutzen */}
            <button onClick={() => { history.goBack() }}>Zurück zur vorherigen Seite</button>
        </div>
    );
}

export default NotFound;
