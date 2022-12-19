import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthContex);
    const location = useLocation()

    if (loading) {
        return <div className=''><button className="loading">loading...</button></div>
    }

    if (loginUser?.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;