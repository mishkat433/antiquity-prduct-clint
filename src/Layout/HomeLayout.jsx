import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componants/Shared/Footer/Footer';
import Navbar from '../Componants/Shared/Navbar/Navbar';
import "./HomeLayout.css"

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;