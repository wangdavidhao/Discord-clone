import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => {
            alert(error.message);
        })
    };

    return (
        <div className="login">
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}

export default Login;
