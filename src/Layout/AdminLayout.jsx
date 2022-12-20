import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../Componants/Shared/AdminSidebar/AdminSidebar';
import Footer from '../Componants/Shared/Footer/Footer';
import Navbar from '../Componants/Shared/Navbar/Navbar';
import { AuthContex } from '../Contex/AuthProvider';
import useCheckUser from '../hooks/useCheckUser';
import "./Layout.css"

const AdminLayout = () => {
    const { loginUser } = useContext(AuthContex);
    const [checkUser, userCheckLoading] = useCheckUser(loginUser?.email)
    console.log(userCheckLoading);
    return (
        <div className='dashboard-bg'>
            <Navbar />
            <div className=''>
                <div className='admin-dashboard '>
                    <div className='sidebar-wid'>
                        <AdminSidebar />
                    </div>
                    <div className=''>
                        {checkUser === "admin" && <Outlet />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;