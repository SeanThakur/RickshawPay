import React , {useState} from 'react'
import './Account.css';
import {useDispatch} from 'react-redux';
import Navbar from '../DriverNavbar/Navbar';
import { Link } from 'react-router-dom';

import {
    setDriverAccount
} from '../../../store/feature/Driver/account/actions'

const Account = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(confirmPassword === password){
            const data = {
                user_name: name,
                email: email,
                password: password
            }
            dispatch(setDriverAccount(data));
            props.history.push('/admin/driver/login')
            setError('');
        }else {
            setError('Password not matched')
        }
    }

    return (
        <>
            <Navbar />
           <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Create Account</h3>
                        <div className="card-text">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="user_name">Name</label>
                                    <input
                                        type="text" 
                                        className="form-control form-control-sm" 
                                        placeholder="Full Name" 
                                        value={name}
                                        onChange={handleNameChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-sm" 
                                        placeholder="@gmail.com" 
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control form-control-sm" 
                                        placeholder="****" 
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control form-control-sm" 
                                        placeholder="****" 
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        required
                                    />
                                </div>
                                <p className="text-danger">
                                    {
                                        error
                                    }
                                </p>
                                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                
                                <div className="sign-up">
                                    Already have an account? <Link to="/admin/driver/login">Log in</Link>
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
