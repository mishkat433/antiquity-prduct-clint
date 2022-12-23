import React, { useState } from 'react';
import { FaDotCircle, FaPlusCircle, FaRegDotCircle, FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./AdminSidebar.css";

const AdminSidebar = () => {
    const [bar, setBar] = useState(false)

    return (
        <div className={bar ? "small-sidebar no-print" : 'sidebar-bg no-print'}>
            <h4 className='admin-bar staus' onClick={() => setBar(!bar)}>{bar ? <FaRegDotCircle /> : <FaDotCircle />} </h4>
            <hr className='d-none' />
            <ul className='side-nav'>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/allUsers" ><FaUserAlt /> <span>{!bar && "All Users"}</span> </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/AddUser"><FaUserPlus /> <span>{!bar && "Add User"}</span></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/addProducts"><FaPlusCircle /> <span>{!bar && "Add Product"}</span></NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;