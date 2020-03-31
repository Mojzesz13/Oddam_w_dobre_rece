import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './HomeLogin.scss'
import fire from '../../../../../config/Fire';
import DrawerToggleButton from '../../NavElements/DrawerToggleButton';
import Logo from '../../../../../assets/clothes.png';


const HomeLogin = (props) => {
    const [userEmail, setUserEmail] = useState(null);

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
            } else {
                setUserEmail(null)
            }
        });
    }

    return (
        <div className="headerLogin">
            <div>{userEmail}</div>
            <button onClick={logout}>logout</button>
            <div className="imgHolder"><img src={Logo} alt="Logo"/></div>
            <NavLink className="loginHolder" to="/login">Zaloguj</NavLink>
            <NavLink className="loginHolder" to="/registration">Załóż konto</NavLink>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
    );
};

export default HomeLogin;