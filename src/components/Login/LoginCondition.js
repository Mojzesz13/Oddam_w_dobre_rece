import React, {useState, useEffect} from 'react';
import fire from '../../config/Fire';
import Home from '../Home/Home';
import Login from './Login';

const LoginCondition = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        authListener();
    }, []);

    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
        });
    }

    return (
        <div>
            {user ? (<Home/>) : (<Login/>)}
        </div>
    );
};

export default LoginCondition;