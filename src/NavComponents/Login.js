import React from "react";
import './login.css';

const Login=()=>{

    return(
        <div className="login-body">
            <section className="section">
            <form className="login-form">
                <input type="email" name="emailId" id="emailId" placeholder="email id" required /><br/><br/><br/>
                <input type="password" name="password" id="password" placeholder="password" required /><br/>
                <button className="login-btn">Login</button><br/>
            </form>
            <label>If you don't have an account </label><a href='/register'>Register </a>
            </section>

        </div>
    )
}

export default Login;