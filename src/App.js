import React from 'react';
import './main.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";

    function App() {
        return (
            <HashRouter>
                <>
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </>
            </HashRouter>
        );
    }
export default App;
