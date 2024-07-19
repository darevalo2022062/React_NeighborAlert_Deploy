import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const HowToPublish = lazy(() => import('../pages/HowToPublish.jsx'));
const Dashboard = lazy(() => import('../pages/DashboardPage.jsx'));

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/how-to-publish', element: <HowToPublish /> },

    { path: '/dashboard', element: <Dashboard /> },
]

export default mainRoutes;