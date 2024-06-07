import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home.jsx'));
const About = lazy(() => import('../pages/home/About.jsx'));
const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
]

export default mainRoutes;