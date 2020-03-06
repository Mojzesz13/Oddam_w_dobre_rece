import React from 'react';
import ReactDOM from "react-dom";
import './HomeTarget.scss';
import titleImg from "../../../assets/Decoration.svg";
import {NavLink, HashRouter, Switch, Route} from "react-router-dom";
import Foundations from "./Foundations"
import Organizations from "./Organizations";
import Local from "./Local";
import Pagination from "./Pagination/Pagination";

const HomeTarget = () => {
    return (
        <HashRouter>
            <div className="homeTargetContainer" id="target">
                <div className="title">
                    <h1> Komu pomagamy ? </h1>
                    <img src={titleImg} alt="decoration-bar"/>
                </div>
                <div className="buttons">
                    <button><NavLink exact to="/">Fundacjom</NavLink></button>
                    <button><NavLink to="/organizations">Organizacjom pozarządowym</NavLink></button>
                    <button><NavLink to="/local">Lokalnym zbiórkom</NavLink></button>
                </div>
                <div className="paginationDiv">
                {/*<Switch>*/}
                {/*        <Route exact path="/" component={Foundations}/>*/}
                {/*        <Route path="/organizations" component={Organizations}/>*/}
                {/*        <Route path="/local" component={Local}/>*/}
                {/*</Switch>*/}
                <Foundations/>

                </div>
                <Pagination/>
            </div>

        </HashRouter>
    );
};

export default HomeTarget;