import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './Navbar.css'

import {
    Logout
} from '../../../../store/feature/auth/actions';

//LOGO
import navbarLogo from '../../../../assets/destination.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(Logout());
    }

    const authLink = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/ride-history">Ride History</NavLink>
            </li>
            <li className="nav-item">
                <div className="nav-link text-light" onClick={logoutHandler}>LOGOUT</div>
            </li>
        </>
    )

    const guestLink = (
        <>
            <li className="nav-item">
                <div 
                    className="nav-link text-light" 
                    data-toggle="modal"
                    data-target="#exampleModal">
                        LOGIN 
                    </div>
            </li>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h4 className="lead text-danger">LOGIN</h4>
                            <div className="row">
                                <div className="col-6">
                                    <a 
                                        className="nav-link text-dark btn btn-outline-info" 
                                        href="/admin/driver/login"
                                    >
                                        LOGIN TO DRIVE
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a 
                                        className="nav-link text-dark btn btn-outline-info" 
                                        href="/login"
                                    >
                                        LOGIN TO RIDE
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <h4 className="lead text-danger">SIGN UP</h4>
                            <div className="row">
                                <div className="col-6">
                                    <a 
                                        className="nav-link text-dark btn btn-outline-info" 
                                        href="/admin/driver/account"
                                    >
                                        SIGNUP TO DRIVE
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a 
                                        className="nav-link text-dark btn btn-outline-info" 
                                        href="/profile"
                                    >
                                        SIGNUP TO RIDE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-1">
                <NavLink className="navbar-brand ml-5" to="/">
                    <img 
                        src={navbarLogo}
                        alt="logo"
                        height="50"
                        width="50"
                    />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" exact to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" exact to="/generate-pass">GENERATE PASS</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#BookARide">BOOK A RIDE</a>
                    </li>
                    {
                        auth.isAuth ? authLink : guestLink
                    }
                </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar
