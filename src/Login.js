import React,{ useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {

    const history=useHistory();

    const [email, setemail] = useState(' ');
    const [password, setpassword] = useState(' ');

    const login=event =>{
        event.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
             history.push('/');
        })
        .catch((e)=>alert(e.message));
    };

    const register=event =>{
        event.preventDefault()

        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/');

        })
        .catch((e)=>alert(e.message));
    };
    return (
        <div className="Login">
            <Link to="/">
               <img className="Login__logo" src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png" alt=" "/>

            </Link>

            <div className="Login__container">
            <h1><strong>Sign in</strong></h1>
            <form>
             <h5>Email:</h5>
             <input value={email} onChange={event => setemail(event.target.value)} type="Email"/>
             <h5>Password</h5>
             <input value={password} onChange={event => setpassword(event.target.value)} type="Password"/>
             <button onClick={login} className="Login__SignIn">Sign In</button>



            </form>
            <p>
                <b>By signing in you agree to Shopifys use and sales. Please see our privacy notice</b>
            </p>
               <button onClick={register} type="submit" className="Login__SignUp"> Create Your Shopfy Account </button>

            </div>
        </div>
    )
}

export default Login
