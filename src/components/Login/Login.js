
import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase.js';
import { useStateValue }  from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
     //signin
     auth.signInWithPopup(provider)
     .then(result => {
         dispatch({
             type: actionTypes.SET_USER,
             user: result.user,
         });
     }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png" alt="" />

                <img className="secondimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png" alt="" />

            </div>
           <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
