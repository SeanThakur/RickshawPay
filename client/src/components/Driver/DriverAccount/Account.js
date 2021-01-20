import React from 'react'
import './Account.css';
import Navbar from '../DriverNavbar/Navbar';

const Account = () => {
    return (
        <>
            <Navbar />
           <div class="global-container">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Create Account</h3>
                        <div class="card-text">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control form-control-sm" placeholder="Full Name" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@gmail.com" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Phone Number</label>
                                    <input type="number" class="form-control form-control-sm" placeholder="+91" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                                
                                <div class="sign-up">
                                    Already have an account? <a href="/">Log in</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Account
