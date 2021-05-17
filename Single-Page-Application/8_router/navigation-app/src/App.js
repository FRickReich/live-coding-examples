import React, { useState } from 'react';

import { BrowserRouter, Route, Link, Switch, NavLink, Redirect, useHistory } from 'react-router-dom';

// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

// unterschied zwischen history.push und redirect: redirect ersetzt die seite, history kann vor und zurück.

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

import './App.css';

function App()
{
    const [ loggedIn, setLoggedIn ] = useState(false);
    const history = useHistory();

    const handleLogin = () =>
    {
      setLoggedIn(true);
    }

    const handleLogOut = () =>
    {
      setLoggedIn(false);
    }

    return (
        <div className="App">
            {/* normale, ankerbasierende navigation */}
            <header>
                <b>Normale Navigation => </b>
                <a href="/">Homepage</a>&nbsp;&nbsp;
                <a href="/profile">Profile</a>&nbsp;&nbsp;
                <a href="/fehlerseite">Error</a>
            </header>

            <BrowserRouter history={history}>
            
              {/* react-router Link version */}
              <header>
                <b>Router Link Navigation => </b>
                <Link to="/">Homepage</Link>&nbsp;&nbsp;
                <Link to="/profile">Profile</Link>&nbsp;&nbsp;
                <Link to="/fehlerseite">Error</Link>
              </header>

              {/* react-router NavLink version */}
              <header>
                <b>Router NavLink Navigation => </b>
                <NavLink to="/" exact activeClassName="active">Homepage</NavLink>&nbsp;&nbsp;
                <NavLink to="/profile" exact activeClassName="active">Profile</NavLink>&nbsp;&nbsp;
                <NavLink to="/fehlerseite" exact activeClassName="active">Error</NavLink>
              </header>

              {
                loggedIn ? 
                <button onClick={ handleLogOut }>Logout</button>
                :
                <button onClick={ handleLogin }>Login</button>
              }

                 <Switch>
                   
                    <Route exact path="/" component={ Home } />

                    <Route exact path="/dashboard">
                        {!loggedIn ? <Redirect to="/profile" /> : <Dashboard />}
                    </Route>

                    <Route exact path="/profile">
                        {loggedIn ? <Redirect to="/dashboard" /> : <Profile />}
                    </Route>
                    
                    <Route component={ NotFound } />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
