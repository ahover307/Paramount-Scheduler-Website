import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import PartyDescriptionPage from "./components/info/PartyDescriptionPage";
import ParentScheduler from "./components/parentSchedulingProcess/ParentScheduler";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
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

            <Switch>
                <Route exact path={'/'}> <LandingPage/> </Route>
                <Route path={'/description'}> <PartyDescriptionPage/> </Route>
                <Route path={'/scheduler'}> <ParentScheduler/> </Route>
            </Switch>
        </div>
    );
}

export default App;
