import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const DashboardPage = lazy(() => import('../pages/DashboardPage.jsx'));

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/dashboard', element: <DashboardPage />}
]

export default mainRoutes;