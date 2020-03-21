import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './HomeHeader.scss'
import HomeLogin from "./HomeLogin/HomeLogin";
import Navigation from "../Navigation/Navigation";
import titleImg from "../../../assets/Decoration.svg"
import SideDrawer from "../Navigation/SideDrawer";


const HomeHeader = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };

    return (
        <div className="headerContainer" id="main">
            <div className="navbar">
                <HomeLogin/>
                <Navigation drawerClickHandler={drawerToggleClickHandler}/>
                <SideDrawer show={sideDrawerOpen}/>
            </div>

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