import './App.css';
import { Footer, Header, Page } from './components/';

// "Nesting Components:
// - Project organization II: The `components` folder
// - Exporting and Importing components
// - Using Components in JSX
// - When to use: Basic guidelines on when to create components"

const App = () => 
{
    return (
        <div className="App">
            <Header />
    
            <Page />

            <Footer />
        </div>
    );
}

export default App;
