import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home.jsx'));

const mainRoutes = [
    { path: '/', element: <Home /> }
]

export default mainRoutes;