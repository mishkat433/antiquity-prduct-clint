import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componants/Shared/Navbar/Navbar';
import "./HomeLayout.css"

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default HomeLayout;