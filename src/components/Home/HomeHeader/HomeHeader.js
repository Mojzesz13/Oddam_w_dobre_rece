import React from 'react';
import {NavLink} from "react-router-dom";
import './HomeHeader.scss'
import titleImg from '../../../assets/Decoration.svg';
import Navigation from '../Navigation/Navigation';

const HomeHeader = () => {

    return (
        <div className="headerContainer" id="main">
            <Navigation/>
            <div className="textContent">
                <div className="title">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <div className="titleImg"><img src={titleImg} alt="decorationBar"/>
                </div>
                <div className="titleButtons">
                    <button><NavLink to="/login">ODDAJ RZECZY</NavLink></button>
                    <button><NavLink to="/login">ZORGANIZUJ ZBIÓRKĘ</NavLink></button>
                </div>
            </div>
        </div>
    );
};
export default HomeHeader;