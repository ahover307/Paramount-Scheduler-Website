import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import MenuAppBar from "./components/navbar/myAppBar";
// import PartyDescriptionPage from "./components/info/PartyDescriptionPage";
// import ParentScheduler from "./components/parentSchedulingProcess/ParentScheduler";
import SplashScreen from "./SplashScreen";

// import {Route, Router, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}

                {/*</header>*/}

                <MenuAppBar/>

                <SplashScreen/>
                {/*<Router>*/}
                {/*            <Switch>*/}
                {/*                <Route exact path={'/'}> <SplashScreen/> </Route>*/}
                {/*                <Route path={'/description'}> <PartyDescriptionPage/> </Route>*/}
                {/*                /!*<Route path={'/scheduler'}> <ParentScheduler/> </Route>*!/*/}
                {/*            </Switch>*/}
                {/*</Router>*/}
            </div>
        );
    }
}

export default App;
