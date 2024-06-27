import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
]

export default mainRoutes;