import React from 'react'
import "./login.css";
const Login = () => {
  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    
                        <h3 className="loginLogo">
Mahak
                        </h3>
                        <span className="loginDesc">Connect with friends across the globe.

                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput"/>
                            <input placeholder='password' className="loginInput"/>
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className="loginRegisterButton">Create a New Account </button>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login