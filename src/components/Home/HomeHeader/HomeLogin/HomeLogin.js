import React from 'react';
import {NavLink} from "react-router-dom";
import "./HomeLogin.scss"

const HomeLogin = () => {
    return (
        <div className="headerLogin" >
            <NavLink to="/login">Zaloguj</NavLink>
            <NavLink to="/registration">Załóż konto</NavLink>
        </div>
    );
};

export default HomeLogin;