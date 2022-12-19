import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../Componants/Shared/AdminSidebar/AdminSidebar';
import Footer from '../Componants/Shared/Footer/Footer';
import Navbar from '../Componants/Shared/Navbar/Navbar';
import Sidebar from '../Componants/Shared/Sidebar/Sidebar';
import "./Layout.css"

const AdminLayout = () => {
    return (
        <div className='dashboard-bg'>
            <Navbar />
            <div className='container '>
                <div className='admin-dashboard '>
                    <div className='sidebar-wid'>
                        <AdminSidebar />
                    </div>
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;