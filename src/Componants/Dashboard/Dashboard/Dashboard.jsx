import React from 'react';
import "./Dashboard.css"
import admin from "../../../Assets/admin.png"

const Dashboard = () => {
    return (
        <div className='dashboard-full'>
            <h1 className='dashboard-heading'>Welcome to Admin Panel</h1>
            <img src={admin} alt="" />
        </div>
    );
};

export default Dashboard;