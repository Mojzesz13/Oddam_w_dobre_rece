import React from 'react';
import {NavLink} from 'react-router-dom';
import './SideDrawer.scss'
import NavList from './NavList';

const SideDrawer = (props) => {
    let drawerClass = "sideDrawer";
    if (props.show === true) {
        drawerClass = "sideDrawer open"
    }
    return (
        <div className={drawerClass}>
            <div className="accountButtons">
                <NavLink className="loginHolder" to="/login">Zaloguj</NavLink>
                <NavLink className="loginHolder" to="/registration">Załóż konto</NavLink>
            </div>
            <NavList/>
        </div>
    );
};

export default SideDrawer;