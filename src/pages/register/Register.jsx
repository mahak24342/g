import React from 'react'
import "./register.css";
const Register = () => {
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
                        <input placeholder='Username' className="loginInput"/>
                            <input placeholder="Email" className="loginInput"/>
                            <input placeholder='password' className="loginInput"/>
                            <input placeholder='password Again' className="loginInput"/>
                            <button className="loginButton">Sign Up</button>
                            
                            <button className="loginRegisterButton">Log into Account</button>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Register