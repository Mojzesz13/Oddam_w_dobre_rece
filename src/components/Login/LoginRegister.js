import React, {useState} from 'react';
import fire from "../../config/Fire";
import "./LoginRegister.scss"
import titleImg from "../../assets/Decoration.svg";

const LoginRegister = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [fireErrors, setFireErrors] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordOneError, setPasswordOneError] = useState("");
    const [passwordTwoError, setPasswordTwoError] = useState("");
    const [loginBtn, setLoginBtn] = useState(true);
    const [register, setRegister] = useState("");
    const [formTitle, setFormTitle] = useState("Zaloguj się");
    const [color, setColor] = useState("#707070");

    const emailRequirements = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        if (passwordTwo !==  passwordOne) {
            setPasswordTwoError("Hasła muszą być takie same");
            setColor("red");
        }
    };

    const login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, passwordOne)
            .catch((error) => {
                setFireErrors(error.message)
            });
    };

    const registration = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, passwordOne)
            .catch((error) => {
                setFireErrors(error.message)
            });
    };

    const getAction = action => {
        if (action === "reg") {
            setFormTitle("Załóż konto");
            setLoginBtn(false);
            setRegister(
                <div className="inputHolder">
                    <label>Powtórz hasło</label>
                    <input type="password"
                           value={passwordTwo}
                           name="password"
                           style={borderStyle}
                           onChange={(e) => setPasswordTwo(e.target.value)}
                    />
                    <span>{passwordTwoError}</span>
                </div>);
        } else {
            setFormTitle("Zaloguj Się");
            setLoginBtn(true);
            setRegister(null);
        }
    };

    let errorNotification = fireErrors ?
        (<div className="loginError">{fireErrors}</div>) : null;

    // let submitBtn = loginBtn ?
    //     (<button className="loginBtn" type="submit" onClick={login}>Zaloguj Się</button>) :
    //     (<button className="loginBtn" type="submit" onClick={registration}>Załóż konto</button>);

    let submitBtn = loginBtn ?
        (<input className="loginBtn" type="submit" onClick={login} value="Zaloguj Się"/>) :
        (<input className="loginBtn" type="submit" onClick={registration} value="Załóż konto"/>);

    let loginRegister = loginBtn ?
        (<button className="loginBtn" onClick={() => getAction("reg")}>Załóż konto</button>) :
        (<button className="loginBtn" onClick={() => getAction("login")}>Zaloguj Się</button>);

    // let loginRegister = loginBtn ?
    //     (<input className="loginBtn" onClick={() => getAction("reg")} value="Załóż konto"/>) :
    //     (<input className="loginBtn" onClick={() => getAction("login")} value="Zaloguj Się"/>);

    return (
        <div className="loginContainer">
            <div className="loginTitle">
                <h1>{formTitle}</h1>
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
                    {register}
                </div>
                <div className="buttonsContainer">
                    {submitBtn}
                    {loginRegister}
                </div>
            </form>
        </div>
    );
};

export default LoginRegister;