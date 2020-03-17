import React from 'react';
import './main.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";


    function App() {
        return (
            <HashRouter>
                <>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </>
            </HashRouter>
        );
    }
export default App;
