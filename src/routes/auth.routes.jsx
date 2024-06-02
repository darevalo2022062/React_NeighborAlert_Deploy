import React, { lazy } from 'react';

const Register = lazy(() => import('../pages/auth/Register.jsx'));
const Login = lazy(() => import('../pages/auth/Login.jsx'))

const authRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
]

export default authRoutes;