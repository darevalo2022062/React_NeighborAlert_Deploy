import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth.js';

const PrivateRouteAdmin = ({ element }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated || user.role !== 'Sp_ADMIN') {
        return <Navigate to="/" />;
    }
    
    return element;
};

export default PrivateRouteAdmin;