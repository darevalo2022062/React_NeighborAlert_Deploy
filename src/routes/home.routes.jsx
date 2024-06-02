import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home.jsx'));

const homeRoutes = [
    { path: '/', element: <Home /> }
]

export default homeRoutes;