import React from 'react';
import "./Navbar.css";
import logo from "../../../Assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const navItem = <>
        <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/blog">Blog</NavLink></li>
        <li><Link className="button" to="/login">Login</Link></li>

    </>
    return (
        <nav className='full-nav'>
            <div className='container nav'>
                <div>
                    <Link to='/'> <img className='logo' src={logo} alt="navLogo" /></Link>
                </div>
                <div>
                    <ul className='nav-option'>
                        {navItem}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;