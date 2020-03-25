import React from 'react';
import './main.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';

    function App() {
        return (
            <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
            </HashRouter>
        );
    }
export default App;
