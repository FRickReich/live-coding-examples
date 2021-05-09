import './App.css';

// Wir wollen uns per fetch die information eines todos von jsonplaceholder holen, wir nehmen dafür das beispiel auf der startseite von jsonplaceholder.
// https://jsonplaceholder.typicode.com/

// 1. als erstes importieren wir wieder React, useState und useEffect von react.
import React, { useState, useEffect } from 'react';

function App()
{
  // 2. dann bauen wir uns einen state für die infos, den wir befüllen wollen, wir geben ihm ein leeres objekt, da wir bei jsonplaceholder sehen, das wir ein objekt zurückbekommen.
  const [ data, setData ] = useState({});
  // 3. ausserdem bauen wir uns einen state, mit dem wir sagen das die seite grad geladen wird, wir setzen den initialwert auf true.
  const [ loading, setLoading ] = useState(true);

  // 6. Wenn wir ihn direkt in den komponenten schreiben.. wird er mehrmals ausgeführt, absolut unkontrolliert, das wollen wir nicht. wir wollen das er direkt beim aufbaue des komponenten ausgelöst wird.
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))

  // 7. Also, versuchen wir es mit useEffect
  useEffect(() =>
  {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json =>
    {
      setData(json);
      setLoading(false);
    })
    // 9. siehe da, der fetch wird nur noch einmal ausgelöst, ok, jetzt können wir die daten an den state übergeben, und auch unser loading auf false setzen

    

    // 8. da wir den fetch nur direkt am anfang ausführen wollen, setzen wir die leere array ein.
  }, [])

  return (
    <div style={{ marginLeft: "25px" }}>
      {/* 4. Jetzt bauen wir eine rudimentäre seite, auf der wir die informationen anzeigen, die wir hoffen vom fetch zu bekommen. */}
      {
        !loading ?
        <>
          <h3>Post { data.id }</h3>
          <ul>
            <li>User ID: { data.userId }</li>
            <li>Title: { data.title }</li>
            <li>Completed: { data.completed ? "true" : "false" } </li>
          </ul>
        </>
        :
        <h3>LOADING...</h3>
      }

      {/* 5. Da data ein leeres objekt ist, bekommen wir keine daten angezeigt, also wo müsste denn nun unser fetch hin? */}
    </div>
  );
}

export default App;
