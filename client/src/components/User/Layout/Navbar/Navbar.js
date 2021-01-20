import React from 'react'
import './Navbar.css'

//LOGO
import navbarLogo from '../../../../assets/destination.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
                        <NavLink className="nav-link text-light" to="/">BOOK A RIDE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/help">HELP</NavLink>
                    </li>
                </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar
