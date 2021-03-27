import React,{useState} from 'react'
import "../css/LogIn.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "../fireBase"

function LogIn() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sigIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //Connexion to your user compte
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //create new user with seccessfully, use Email and Password
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='./'>
                <img
                className="login__logo"
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input
                    type="text"
                    value={email}
                    onChange={e =>  setEmail(e.target.value)}
                    />
                <h5>Password</h5>
                <input
                    type="password"
                    value={password}
                    onChange={e =>  setPassword(e.target.value)}
                    />
                    <button 
                        type='submit'
                        onClick={sigIn}
                        className="login__signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of use & Sale. Please see our Priacy Notice, our Coukies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="login__registrerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default LogIn
