import React , {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Login.css'

import {
    getLogin
} from '../../../store/feature/auth/actions';

//Logos
import Logo from '../../../assets/destination.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if(auth.isAuth)
        {
            window.location.href = `/`
        } 
    }, [auth.isAuth])

    const [credValue, setCredValue] = useState('');
    const [password, setPassword] = useState('');

    const credValueChangeHandler = (e) => {
        setCredValue(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email: credValue,
            password: password
        }
        dispatch(getLogin(data));
    }

    return (
        <>
        <div id="Login">
            <div className="text-center">
                <div>
                    <img 
                        src={Logo}
                        alt="logo"
                        height="50"
                        width="50"
                    />
                </div>
                <p className="discription">Welcome back, you can sign in to your account.</p>
            </div>
            <div className="my-3">
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="credValue"
                                    placeholder="Enter email"
                                    className="form-control"
                                    value={credValue}
                                    onChange={credValueChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="****"
                                    className="form-control"
                                    value={password}
                                    onChange={passwordChangeHandler}
                                    required
                                />
                                <p className="text-danger">
                                    {
                                        auth.isAuth === false ? error.length && error : error.length > 0 && error
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="LOGIN" 
                        className="btn btn-primary btn-block"
                    />
                    <div className="sign-up">
                        Forget your password? <Link to="/forget-password">Reset password</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default Login
