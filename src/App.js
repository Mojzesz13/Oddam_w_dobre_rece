import React from 'react';
import './main.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from "./components/Login/Registration";
import LoginCondition from "./components/Login/LoginCondition";

    function App() {
        return (
            <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={LoginCondition}/>
                        <Route path="/registration" component={Registration}/>
                    </Switch>
            </HashRouter>
        );
    }

export default App;
