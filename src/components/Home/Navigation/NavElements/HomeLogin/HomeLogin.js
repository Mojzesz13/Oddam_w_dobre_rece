import React from 'react';
import {NavLink} from 'react-router-dom';
import "./HomeLogin.scss"
// import fire from '../../../../../config/Fire';
import DrawerToggleButton from '../../NavElements/DrawerToggleButton';
import Logo from '../../../../../assets/clothes.png'


const HomeLogin = (props) => {

   // const logout = () => {
   //     fire.auth().signOut();
   // };

    return (
        <div className="headerLogin" >
            {/*<button onClick={logout}>logou</button>*/}
            <div className="imgHolder">  <img src={Logo} alt="Logo"/> </div>
            <NavLink className="loginHolder" to="/login">Zaloguj</NavLink>
            <NavLink className="loginHolder" to="/registration">Załóż konto</NavLink>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
    );
};

export default HomeLogin;