import React from 'react';
import {NavLink} from 'react-router-dom';
import "./HomeLogin.scss"
import fire from "../../../../config/Fire";
import DrawerToggleButton from '../NavElements/DrawerToggleButton';


const HomeLogin = (props) => {

   // const logout = () => {
   //     fire.auth().signOut();
   // };

    return (
        <div className="headerLogin" >
            {/*<button onClick={logout}>logou</button>*/}

            <NavLink to="/login">Zaloguj</NavLink>
            <NavLink to="/registration">Załóż konto</NavLink>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
    );
};

export default HomeLogin;