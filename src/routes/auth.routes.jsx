import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoutes.jsx';

const Register = lazy(() => import('../pages/Register.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'))


const authRoutes = [
    {
        path: '/login', element: <Login />,
    },
    { path: '/register', element: <Register /> }
]

export default authRoutes;