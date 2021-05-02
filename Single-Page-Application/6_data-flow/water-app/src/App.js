import Water from './Components/Water';
import Message from './Components/Message';

import './App.css';

function App() {
  return (
    <div className="App">
      <Water />

      <br/>
      <br/>

      <Message initVisibility={true} color="lime">Hallo Welt</Message>
    </div>
  );
}

export default App;
