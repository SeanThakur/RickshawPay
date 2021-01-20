import React from 'react'
import './Login.css';
import Navbar from '../DriverNavbar/Navbar';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in</h3>
                        <div className="card-text">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Account Holder</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email/Phone/Auto no" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <a href="/" className="forget-password">Forgot password?</a>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="****" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                
                                <div className="sign-up">
                                    Don't have an account? <a href="/">Create One</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
