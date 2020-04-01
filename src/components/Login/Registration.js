import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import fire from '../../config/Fire';
import Navigation from '../Home/Navigation/Navigation';
import './LoginRegisterLogout.scss';
import titleImg from '../../assets/Decoration.svg';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [fireErrors, setFireErrors] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordOneError, setPasswordOneError] = useState("");
    const [passwordTwoError, setPasswordTwoError] = useState("");
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
        if (passwordTwo !== passwordOne) {
            setPasswordTwoError("Hasła muszą być takie same");
            setColor("red");
        }
    };

    const registration = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, passwordOne)
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
                    <h1>Załóż konto</h1>
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
                        <div className="inputHolder">
                            <label>Powtórz hasło</label>
                            <input type="password"
                                   value={passwordTwo}
                                   name="password"
                                   style={borderStyle}
                                   onChange={(e) => setPasswordTwo(e.target.value)}
                            />
                            <span>{passwordTwoError}</span>
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <NavLink className="loginBtn" to="/login">Zaloguj</NavLink>
                        <input className="loginBtn" type="submit" onClick={registration} value="Załóż konto"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registration;