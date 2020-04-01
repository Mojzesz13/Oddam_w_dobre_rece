import React from 'react';
import Navigation from '../Home/Navigation/Navigation';
import './LoginRegisterLogout.scss';
import titleImg from '../../assets/Decoration.svg';

const Logout = () => {

    return (
        <>
            <Navigation/>
            < div className="loginContainer">
                <div className="loginTitle">
                    <h1> Wylogowanie nastąpiło pomyślnie </h1>
                    <img src={titleImg} alt="decorationBar"/>
                </div>
                <button>Strona Główna</button>
            </div>
        </>
    );
};

export default Logout;