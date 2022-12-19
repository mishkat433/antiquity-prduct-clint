import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../../../Assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaShopify } from 'react-icons/fa';
import { AuthContex } from '../../../Contex/AuthProvider';
import useCheckUser from '../../../hooks/useCheckUser';
const Navbar = () => {
    const { sidebar, setSidebar, products, loginUser, logout } = useContext(AuthContex)
    const [checkUser, userCheckLoading] = useCheckUser(loginUser?.email)
    const [bar, setBar] = useState(false)
    console.log(userCheckLoading);

    const sidebarHandle = () => {
        setSidebar(!sidebar)
    }

    const navItem = <>
        <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/blog">Blog</NavLink></li>
        {checkUser === "admin" && loginUser?.uid && <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/dashboard">Dashboard</NavLink></li>}
        {
            loginUser?.uid ?
                <li><Link onClick={() => logout()} className="button">LogOut</Link></li>
                : <li><Link className="button" to="/login">Login</Link></li>
        }
        <li><Link className="shopping" onClick={sidebarHandle}><FaShopify /><sup>{products?.length ? products?.length : 0}</sup></Link></li>
    </>
    return (
        <nav className='full-nav'>
            <div className='container nav'>
                <div>
                    <Link to='/'> <img className='logo' src={logo} alt="navLogo" /></Link>
                </div>

                <div>
                    <ul className={bar ? 'nav-option' : 'show-hide nav-option'}>
                        {navItem}
                    </ul>
                </div>
                <div className='bar'>
                    <FaBars onClick={() => setBar(!bar)} />
                </div>
            </div >
        </nav >
    );
};

export default Navbar;