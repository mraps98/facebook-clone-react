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
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
                <img src="https://png2.cleanpng.com/sh/dcb81e4bdf538a133ad2519adaa2ae41/L0KzQYm3U8MxN5t5fZH0aYP2gLBuTfZia5Znh9H0LXa7PbP8kBlvbaR4RdNtdnX1hLr6if5oNZR0heJqbomwfrL0hb02aZNqeatrYkm2drO8VL44QGM6TKMAMEG4QoO7VMQ4O2I7SKg6LoDxd1==/kisspng-facebook-f8-business-advertising-company-name-5abea9bb93fb54.7825415015224447316061.png" width="350" alt="facebook txt logo transparent" />
            </div>
            <Button onClick={signIn} type="submit">Sign in</Button>
        </div>
    )
}

export default Login;
