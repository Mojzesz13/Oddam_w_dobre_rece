import React from 'react';
import {NavLink} from "react-router-dom";
import "./HomeLogin.scss"
import fire from "../../../../config/Fire";


const HomeLogin = () => {

   // const logout = () => {
   //     fire.auth().signOut();
   // };

    return (
        <div className="headerLogin" >
            {/*<button onClick={logout}>logou</button>*/}

            <NavLink to="/login">Zaloguj</NavLink>
            <NavLink to="/registration">Załóż konto</NavLink>
        </div>
    );
};

export default HomeLogin;