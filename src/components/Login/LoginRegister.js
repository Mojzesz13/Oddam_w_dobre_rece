import React, {useState} from 'react';
// import fire from "../../config/Fire";
import HomeLogin from "../Home/HomeHeader/HomeLogin/HomeLogin";
import "./LoginRegister.scss"
import Navigation from "../Home/Navigation/Navigation";
import MenuIcon from "../../assets/menu.png"

const LoginRegister = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fireErrors, setFireErrors] = useState("");
    const [loginBtn, setLoginBtn] = useState(true);
    const [formTitle, setFormTitle] = useState("Login");


    return (

        <div className="loginContainer">
            <div className="loginNavigation">
                <HomeLogin/>
                <Navigation/>
            </div>
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
                    <input type="submit" className="loginBtn" value="Enter"/>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;