import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result.user);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="./facebook-logo.png" alt="" />
                <img src="./facebook-text.png" width="350" alt="facebook txt logo transparent" />
            </div>
            <Button onClick={signIn} type="submit">Sign in</Button>
        </div>
    )
}

export default Login;
