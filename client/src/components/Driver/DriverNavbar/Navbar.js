import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Navbar.css';

import {
    driverLogout
} from '../../../store/feature/Driver/auth/actions'

//Logos
import Logo from '../../../assets/destination.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch();
    const driverAuth = useSelector(state => state.driverAuth);

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(driverLogout());
    }

    const authLink = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/admin/driver/profile">PROFILE</NavLink>
            </li>
            <li className="nav-item">
                <div className="nav-link text-light" onClick={logoutHandler}>LOGOUT</div>
            </li>
        </>
    )

    const guestLink = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to="/admin/driver/login">LOGIN</NavLink>
            </li>
        </>
    )

    return (
        <>
        {/* Navigation Bar  */}
        <nav className="navbar navbar-expand-lg navbar-light py-1">
            <NavLink className="navbar-brand ml-5" to="/admin/driver/dashboard">
                <img 
                    src={Logo}
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
                {
                    driverAuth.isLogged ? authLink : guestLink
                }
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
