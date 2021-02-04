import React , {useState, useEffect} from 'react'
import './Login.css';
import Navbar from '../DriverNavbar/Navbar';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {
    getDriverLoggedIn
} from '../../../store/feature/Driver/auth/actions'

const Login = (props) => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const driverAuth = useSelector(state => state.driverAuth);

    useEffect(() => {
        if(driverAuth.isLogged)
        {
            props.history.push('/admin/driver/profile')
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [driverAuth.isLogged])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        dispatch(getDriverLoggedIn(data));
    }

    return (
        <>
            <Navbar />
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body">
                        <h3 className="card-title text-center">Log in</h3>
                        <div className="card-text">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Account Holder</label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-sm" 
                                        placeholder="Email" 
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Link to="/admin/driver/forget-password" className="forget-password">Forgot password?</Link>
                                    <input 
                                        type="password" 
                                        className="form-control form-control-sm" 
                                        placeholder="****" 
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                     <p className="text-danger">
                                        {
                                            driverAuth.isLogged === false ? error.length && error : error.length > 0 && error
                                        }
                                     </p>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                
                                <div className="sign-up">
                                    Don't have an account? <Link to="/admin/driver/account">Create One</Link>
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
