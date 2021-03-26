import React from 'react'
import "../css/LogIn.css"
import {Link} from "react-router-dom"

function LogIn() {
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
                    type="text"/>
                <h5>Password</h5>
                <input
                    type="password"/>
                    <button className="login__signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of use & Sale. Please see our Priacy Notice, our Coukies Notice and our Interest-Based Ads Notice.
            </p>
            <button className="login__registrerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default LogIn
