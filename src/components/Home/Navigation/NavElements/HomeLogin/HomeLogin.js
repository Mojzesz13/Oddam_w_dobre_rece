import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './HomeLogin.scss'
import fire from '../../../../../config/Fire';
import DrawerToggleButton from '../../NavElements/DrawerToggleButton';
import Logo from '../../../../../assets/clothes.png';

const HomeLogin = (props) => {
    const [userEmail, setUserEmail] = useState(null);
    const [logOutStatus, setLogOutStatus] = useState("block");
    const [logInStatus, setLogInStatus] = useState("none");

    const logout = (e) => {
        e.preventDefault();
        fire.auth().signOut();
    };

    useEffect(() => {
        authListener();
    }, []);

    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
                setLogOutStatus("none");
                setLogInStatus("block")

            } else {
                setUserEmail(null);
                setLogOutStatus("block");
                setLogInStatus("none");
            }
        });
    }

    return (
        <div className="headerLogin">
            <div className="imgHolder"><img src={Logo} alt="Logo"/></div>
            <div className="userHolder" style={{display: logInStatus}}>Cześć {userEmail}!</div>
            <NavLink className="loginHolder" to="/giveBackStuff" style={{display: logInStatus}}>Oddaj rzeczy</NavLink>
            <NavLink className="loginHolder" to="/logout" style={{display: logInStatus}} onClick={logout}>Wyloguj</NavLink>
            <NavLink className="loginHolder" to="/login" style={{display: logOutStatus}}>Zaloguj</NavLink>
            <NavLink className="loginHolder" to="/registration" style={{display: logOutStatus}}>Załóż konto</NavLink>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
    );
};

export default HomeLogin;