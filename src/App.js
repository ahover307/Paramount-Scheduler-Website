import React, {Component} from 'react';
import './App.css';
import MenuAppBar from "./components/navbar/myAppBar";
import PartyDescriptionPage from "./components/info/PartyDescriptionPage";
// import ParentScheduler from "./components/parentSchedulingProcess/ParentScheduler";
import SplashScreen from "./SplashScreen";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import InformationComponent from "./components/parentSchedulingProcess/scheduler/InformationComponent";

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="App">
                    {/*<header className="App-header"></header>*/}

                    <MenuAppBar/>

                    <Router>
                        <Switch>
                            <Route exact path={'/'}> <SplashScreen/> </Route>
                            <Route path={'/description'}> <PartyDescriptionPage/> </Route>
                            <Route path={'/scheduler'}> <InformationComponent/> </Route>
                        </Switch>
                    </Router>

                </div>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
