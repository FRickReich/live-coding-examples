import logo from './logo.svg';
import bild from './bild.jpeg'

import './App.css';

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={bild} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
