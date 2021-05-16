import React from 'react';

// 1. Als erstes importieren wir 3 elemente von react-router-dom. Wir brauchen BrowserRouter, den router selber, und Route, um routen anzulegen.
import { BrowserRouter, Route } from 'react-router-dom';

// 10. Wir importieren also Switch, von react router dom
import { Switch } from 'react-router-dom';

// 4. hier sehen wir, wieso ich die andere import art besser finde, wir könnten jetzt alle Seiten aus dem pages ordner mit einem befehl laden, wenn wir eine index.js zum verteilen nutzen würden.
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';

import './App.css';

function App()
{
    return (
        <div className="App">
            {/* 8. Wir können ausserhalb des routers ein navigation anlegen, um uns zu den verschiedenen pfaden zu bewegen. */}

            <header>
                <a href="/">Homepage</a>&nbsp;
                <a href="/blog">Blog</a>&nbsp;
                <a href="/contacts">Kontakt</a>
            </header>

            {/* 9. wenn wir die pfade jetzt besuchen, stoßen wir aber auf ein problem. von home aus, werden die anderen komponenten, die im pfad weiter unten sind, auch angezeigt. Das können wir umgehen, indem wir einen switch benutzen. React-router-dom hat dafür einen komponenten */}

            {/* 2. jetzt fügen wir BrowserRouter als element ein, das initialisiert den router */}
            <BrowserRouter>

                {/* 11. Innerhalb von BrowserRouter, verschachteln wir unsere Routen in den switch. */}
                <Switch>

                    {/* 3. Jetzt importieren wir 3 unserer seiten komponenten, Home, Blog und Contacts */}

                    {/* 5. mit unseren importierten komponenten können wir jetzt routen erstellen, dafür erstellen wir für jede seite ein element "Router" */}
                    
                    {/* 
                    6. Der router nimmt verschiedene attribute an:
                    - Path: der pfad, der besucht werden muss, um den komponenten anzuzeigen.
                    - Component: Der komponent, der angezeigt werden soll.

                    Wenn wir jetzt unsere localhost adresse besuchen, ist alles wie immer, wir sehen einen komponenten
                    */}

                    {/* 12. Jetzt wir zwar jeweils nur ein komponent angezeigt, da aber /blog und /contacts immernoch unter / sind, brauchen wir noch ein attribut, das wir im ersten router hinterlegen. "exact". Damit sichern wir das diese route NUR direkt auf den angegebenen pfad führt */}
                    <Route exact path="/" component={ Home } />

                    {/* 7. Wir legen jetzt die anderen routen an, indem wir jeweils einen pfad, und einen komponenten angeben. */}
                    <Route path="/blog" component={ Blog } />
                    <Route path="/contacts" component={ Contacts } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
