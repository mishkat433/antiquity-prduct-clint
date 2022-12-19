import React from 'react';
import { FaChartPie, FaCloudUploadAlt, FaDatabase } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./AdminSidebar.css"

const AdminSidebar = () => {
    return (
        <div className='sidebar-bg'>
            <ul className='side-nav'>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/dataTable"><FaDatabase /> Data Table</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/imageUpload"><FaCloudUploadAlt /> Image Upload</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-link"} to="/dashboard/chart"><FaChartPie /> Chart</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;