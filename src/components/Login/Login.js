import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from "../Home/Navigation/Navigation";
import fire from '../../config/Fire';
import './LoginRegisterLogout.scss';
import titleImg from '../../assets/Decoration.svg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [fireErrors, setFireErrors] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordOneError, setPasswordOneError] = useState("");
    const [color, setColor] = useState("#707070");

    const emailRequirements = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let borderStyle = {borderBottom: `1px solid ${color}`};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRequirements.test(email)) {
            setEmailError("Podany email jest nieprawidłowy");
            setColor("red");
        }
        if (passwordOne.length < 6) {
            setPasswordOneError("Hasło musi mieć co najmniej 6 znaków");
            setColor("red");
        }
    };

    const login = e => {
        fire.auth().signInWithEmailAndPassword(email, passwordOne)
            .catch((error) => {
                setFireErrors(error.message)
            });
    };

    let errorNotification = fireErrors ?
        (<div className="loginError">{fireErrors}</div>) : null;

    return (
        <>
            <Navigation/>
            <div className="loginContainer">
                <div className="loginTitle">
                    <h1>Zaloguj się</h1>
                    <img src={titleImg} alt="decorationBar"/>
                </div>
                {errorNotification}
                <form className="formTitle"
                      onSubmit={handleSubmit}>
                    <div className="inputsContainer">
                        <div className="inputHolder">
                            <label>Email</label>
                            <input type="text"
                                   value={email}
                                   name="email"
                                   style={borderStyle}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            <span>{emailError}</span>
                        </div>
                        <div className="inputHolder">
                            <label>Hasło</label>
                            <input type="password"
                                   value={passwordOne}
                                   name="password"
                                   style={borderStyle}
                                   onChange={(e) => setPasswordOne(e.target.value)}
                            />
                            <span>{passwordOneError}</span>
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <NavLink className="loginBtn" to="/registration">Załóż konto</NavLink>
                        <input className="loginBtn" type="submit" onClick={login} value="Zaloguj Się"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;