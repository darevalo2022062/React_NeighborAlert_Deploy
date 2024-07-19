import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoutes.jsx';

const Register = lazy(() => import('../pages/Register.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'))
const Profile = lazy(() => import('../pages/Profile.jsx'))
const Settings = lazy(() => import('../pages/Settings.jsx'))
const Request = lazy(() => import('../pages/Request.jsx'))

const userRoutes = [
    { path: '/login', element: <Login />, },
    { path: '/register', element: <Register /> },
    { path: '/profile', element: <PrivateRoute element={<Profile />} /> },
    { path: '/settings', element: <PrivateRoute element={<Settings />} /> },
    { path: '/request', element: <PrivateRoute element={<Request />} /> },
]


export default userRoutes;