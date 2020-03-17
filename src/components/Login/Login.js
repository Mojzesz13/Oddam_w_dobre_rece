import React, {useState, useEffect} from 'react';
import fire from "../../config/Fire";
import Home from "../Home/Home";
import LoginRegister from "./LoginRegister";


const Login = () => {
    const[user, setUser] = useState(null);

    useEffect(() =>{
        authListener();
    },[]);

    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user);
            }else{
                setUser(null)
            }
        });
    }

    return (
        <div>
            {user ? (<Home/>) : (<LoginRegister/>)}

        </div>
    );
};

export default Login;