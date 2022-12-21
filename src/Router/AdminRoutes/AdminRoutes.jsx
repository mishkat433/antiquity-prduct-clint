import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import useCheckUser from '../../hooks/useCheckUser';
const AdminRoutes = ({ children }) => {
    const { loginUser, loading } = useContext(AuthContex);
    const [checkUser, userCheckLoading] = useCheckUser(loginUser?.email)

    const location = useLocation()
    if (loading || userCheckLoading) {
        return <div className=''><h3 className="loading">loading...</h3></div>
    }
    if (loginUser?.uid && checkUser === "admin") {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoutes;
