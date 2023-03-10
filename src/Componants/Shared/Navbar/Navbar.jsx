import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaSearch, FaShopify } from 'react-icons/fa';
import { AuthContex } from '../../../Contex/AuthProvider';
import useCheckUser from '../../../hooks/useCheckUser';
const Navbar = () => {
    const { sidebar, setSidebar, products, loginUser, logout } = useContext(AuthContex)
    const [checkUser, userCheckLoading] = useCheckUser(loginUser?.email)
    const [bar, setBar] = useState(false)
    console.log(userCheckLoading);

    // const sidebarHandle = () => {
    //     setSidebar(!sidebar)
    // }
    const navItem = <>
        <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/home">Shop</NavLink></li>
        {checkUser === "admin" && loginUser?.uid && <li><NavLink className={({ isActive }) => isActive ? "nav-active" : "nav-link"} to="/dashboard">Admin Panel </NavLink></li>}
        <li><Link className="shopping" onClick={() => setSidebar(!sidebar)} title="Shopping Cart"><FaShopify /><sup>{products?.length ? products?.length : 0}</sup></Link></li>
        {
            loginUser?.uid ?
                <div className='after-login'><li><Link onClick={() => logout()} className="button">LogOut</Link></li>
                    <img className='loginUser-photo' src={loginUser?.photoURL} alt="" />
                </div>
                : <li><Link className="button" to="/login">Login</Link></li>
        }

    </>
    return (
        <nav className='full-nav no-print'>
            <div className='container nav'>
                <div>
                    <Link to='/'> <h3 className='title'>Mohammad Borhan Uddin Miskat</h3></Link>
                </div>
                <div className='sub-nav'>
                    <div className="search-container serc">
                        <input type="text" placeholder="Search.." name="search" className='search-input' />
                        <button className='search-btn' ><FaSearch /></button>
                    </div>
                    <div>
                        <ul className={bar ? 'nav-option' : 'show-hide nav-option'}>
                            {navItem}
                        </ul>
                    </div>
                    <div className='bar'>
                        <FaBars onClick={() => setBar(!bar)} />
                    </div>
                </div>
            </div >
        </nav >
    );
};

export default Navbar;