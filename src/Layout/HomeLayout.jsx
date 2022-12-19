import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componants/Shared/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div></div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;