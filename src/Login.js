import { auth , provider } from "./firebase";
import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {actionTypes} from "./reducer"
import { useStateValue } from "./StateProvider";
function Login() {

    const [state,dispatch]=useStateValue();
    const SignIn = () => {
        
    auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        }).catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"></img>
            </div>
            <Button type="submit" onClick={SignIn}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
