import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import './ForgetPassword.css'

import {
    setResetPassword
} from '../../../store/feature/auth/actions';

//Logos
import Logo from '../../../assets/destination.png';

const ForgetPassword = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            const data = {
                email, 
                password
            }
            dispatch(setResetPassword(data));
            setError('')
            window.location.href = '/login'
        } else {
            setError('Password not matched')
        }
        
    }

    return (
        <>
        <div id="ForgetPassword">
            <div className="text-center">
                <div>
                    <img 
                        src={Logo}
                        alt="logo"
                        height="50"
                        width="50"
                    />
                </div>
                <p className="discription">Reset your account.</p>
            </div>
            <div className="my-3">
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter email"
                                    className="form-control"
                                    value={email}
                                    onChange={emailChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="****"
                                    className="form-control"
                                    value={password}
                                    onChange={passwordChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    type="password" 
                                    placeholder="****"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={confirmPasswordChangeHandler}
                                    required
                                />
                                <p className="text-danger">
                                    {
                                        error
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="RESET" 
                        className="btn btn-primary btn-block"
                    />
                </form>
            </div>
        </div>
    </>
    )
}

export default ForgetPassword
