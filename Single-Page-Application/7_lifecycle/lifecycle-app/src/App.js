import './App.css';

// Referenz: https://reactjs.org/docs/hooks-reference.html#useeffect

// Wir können zum beispiel den titel der seite direkt zum anfang des ladens eines komponenten ändern, dafür können wir auf den title parameter des document objekt der dom zugreifen. Das könnten wir direkt hier machen, über unserem return, allerdings wird unser befehl dann andauernd neu ausgeführt, sobald der komponent veränder wird. das wollen wir nicht. Wenn wir useEffect benutzen, passiert dies nur beim laden des komponenten, und wenn wir den titel ändern wollen würden, könnten wir das mit einer event funktion machen.

// Bauen wir dieses konstrukt einmal auf.

// Zu erst importieren wir useState und useEffect von react.
import React, { useEffect, useState } from 'react';

function App()
{
  // als nächstes erstellen wir einen state Hook der unseren seitenTitel speichern soll.
  const [ pageTitle, setpageTitle ] = useState("Unsere tolle App!");

  // jetzt bauen wir einen useEfect hook, und schauen ihn uns mal an.
  // Wir schreiben useEffect und fügen eine anonyme callback funktion ein, um den ausführenden teil unseres seiteneffekts in den body zu schreiben.
  useEffect(() =>
  {
    // in unserem effekt, greifen wir jetzt auf document.title zu, und geben den inhalt des states daran weiter.
    document.title = pageTitle; // unsere seite hat jetzt einen anderen titel.

    // jetzt setzen wir ans ende noch ein leeres array für die abhängigkeiten. Dieses array hat die macht, zu entscheiden wann ein der effekt ausgeführt wird, aber darauf gehen wir nachher noch etwas detailierter ein.

    // Der unmount, also der cleanup, der dafür da ist, zum beispiel verbindungen zu beenden, oder einen interval zu löschen, kann innerhalb von useEffect einfach ausgelöst werden, indem man eine anonyme funktion returnt, und dort die befehle ausführt, die nach jedem komponentenneuaufbau passieren sollen, wir haben jetzt hier keinen sinnvollen einsatz davon, also geben wir das event einfach in der konsole aus.
    return () =>
    {
      console.log('hier wird aufgeräumt...');
    };

    // Was genau kann diese array denn?
    // - wenn wir die array einfügen, aber leer lassen, so wie wir es jetzt gemacht haben, wird der effekt nur einmal ausgeführt, wenn der komponent geladen wurde, ergo wird unser seitentitel nicht verändert.
    // - Wenn wir die array weg lassen wird der effekt bei jedem neu-rendern ausgeführt, also wird unser seitentitle auch verändert, aber die ganze funktion wird ausgeführt, egal was mit dem komponenten grad passiert, das ist natürlich nicht besonder performant.
    // - es gibt aber etwas, das uns in dieser situation hier hilft. Denn wenn wir die array mit einem, oder mehreren spezifischen props, oder states befüllen, wird der effekt jedes mal neu ausgeführt, wenn sich dieser wert ändert. schieben wir also "pageTitle" in die array hinein, und schauen was nach dem button klick passiert.
  }, [pageTitle]);

  // wir erstellen eine event funktion, mit der wir über einen button klick den state pageTitle ändern wollen.
  const changePageTitle = (e) =>
  {
    // wenn wir dinge innerhalb des komponenten, aber ausserhalb des effekts ändern, sehen wir jetzt in der konsole, durch unser console log im unmount, das sich der komponent tatsächlich neu aufbaut.
    setpageTitle("Wir haben den namen unserer App verändert!");
  }

  return (
    <>
      Hello World!
      
      <br/>
      {/* Wir erstellen einen button um den title zu ändern und übergeben unsere funktion */}
      <button onClick={ (e) => changePageTitle(e) }>Change page title</button>
      {/* Wenn wir den button anklicken, passiert, wie wir sehen nichts. da document.title nicht angesprochen wird. Jetzt schauen wir uns doch mal diese merkwürdige array am ende von useEffect an, mit der wir dieses problem beheben können. */}
    </>
  );
}

export default App;

