import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoutes.jsx';
import { useSelector } from 'react-redux';

const Register = lazy(() => import('../pages/auth/Register.jsx'));
const Login = lazy(() => import('../pages/auth/Login.jsx'))


const authRoutes = [
    {
        path: '/login', element: <PrivateRoute element={<Login />} />,
    },
    { path: '/register', element: <PrivateRoute element={<Register />} /> }
]

export default authRoutes;