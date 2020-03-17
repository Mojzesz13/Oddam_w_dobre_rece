import React, {useState} from 'react';
import fire from "../../config/Fire";
import HomeLogin from "../Home/HomeHeader/HomeLogin/HomeLogin";
import "./LoginRegister.scss"
import Navigation from "../Home/Navigation/Navigation";
import MenuIcon from "../../assets/menu.png"

const LoginRegister = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fireErrors, setFireErrors] = useState("");
    const [loginBtn, setLoginBtn] = useState(true);
    const [register, setRegister] = useState("");
    const [formTitle, setFormTitle] = useState("Login");

    const login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                setFireErrors(error.message)
            });
    };

    const registration = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                setFireErrors(error.message)
            });
    };

    const getAction = action => {
        if(action === "reg"){
            setFormTitle("Załóż konto");
            setLoginBtn(false);
        }else {
            setFormTitle("Login test");
            setLoginBtn(true);
        }
    };

    let errorNotification = fireErrors ?
        (<div className="loginError">{fireErrors}</div>) : null;

    let submitBtn = loginBtn ?
        (<input className="loginBtn" type="submit" onClick={login} value="Enter1"/>) :
        (<input className="loginBtn" type="submit" onClick={registration} value="Register1"/>);

    let loginRegister = loginBtn ?
        (<button className="registerBtn" onClick={() => getAction("reg")}>Załóż konto</button>):
        (<button className="registerBtn" onClick={() => getAction("login")}>Login</button>);

    return (
        <div className="loginContainer">
            <div className="loginNavigation">
                <HomeLogin/>
                <Navigation/>
            </div>
            {errorNotification}
            <div className="loginContent">
                <form className={formTitle}>
                    <input type="text"
                           value={email}
                           name="email"
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                           value={password}
                           name="password"
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    {loginRegister}
                    {submitBtn}
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;