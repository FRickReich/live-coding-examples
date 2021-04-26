import './App.css';

function App() {
  const userlist =
  [
      {
          firstName: "Max",
          lastName: "Mustermann",
          age: 17
      },
      {
          firstName: "James",
          lastName: "Bond",
          age: 47
      },
      {
          firstName: "Michael",
          lastName: "Knight",
          age: 35
      }
  ];

  const isValid = true;

  const isAdult = (age) => {
    return age > 18;
  }

  return (

    // <> oder <React.Fragment></React.Fragment> gibt uns die möglichkeit HTML elemente zu deklarieren, ohne sie in ein weiteres element zu werfen

    <>

      {/* - Multi-line templates: `const <component name> = () => (<JSX>)` */}

      <h2>JavaScript in JSX Nutzen</h2>

      <p>Wenn wir JavaScript in JSX nutzen wollen, schreiben wir es in geschwungene klammern, wichtig ist, das wir auf semikolons verzichten:</p>

      <p>{`${ userlist[0].firstName } ${ userlist[0].lastName }`} is {isAdult(userlist[0].age) ? "old enough" : "not old enough" }</p>

      <hr/>

      <h2>For in jsx = Map</h2>

      <p>
        Wenn wir durch etwas loopen wollen, und den inhalt ausgebn wollen, nutzen wir map.
        Wir geben jedem element einen key, damit jeder eintrag eine definitive nummer hat:
      </p>

      <ul>
        {
          userlist.map((user, i) => {
            return <li>{`${user.firstName} ${user.lastName}`}</li>
          })
        }
      </ul>

      <hr/>

      <h2>Kommentare in JSX</h2>

      <p>
        Kommentare werden immer mit brackets eingeleitet, und dann im multiline oder jsdoc style geschrieben:
      </p>

      {/* Ich bin nur eine zeile lang */}

      {/**
         * 
         * JSDoc Style
         * 
         */}

      {/* ich
        bin
        mehrere
        zeilen
        lang */}

      <hr/>

      <h2>"Conditional Rendering", oder zeige dinge nur, wenn du darfst</h2>

      <p>Conditional rendering funktioniert in react genau wie in der Dom, wir sagen "WENN" X zutrifft, zeige etwas an:</p>

      <h3>Markiere Volljährige mitglieder</h3>

      <ul>
        {
          userlist.map((user, i) => {
            return (
              <li style={{ width: 200, backgroundColor: isAdult(user.age) ? "lime" : "tomato" }}>
                {`${user.firstName} ${user.lastName}`}
              </li>
            )
          })
        }
      </ul>

      <p>wir können anhand von ternary operatoren die ansicht ganzer html elemente steuern:</p>
      {
        isValid ?
        (
          <div style={{ width: 200, padding: 20, backgroundColor: "lime" }}>
            <p>isValid is true</p>
          </div>
        )
        :
        (
          <div style={{ width: 200, padding: 20, backgroundColor: "tomato" }}>
            <p>isValid is false</p>
          </div>
        )
      }
    </>
  );
}

export default App;
