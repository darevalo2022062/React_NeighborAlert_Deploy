import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoutes.jsx';

const Reports = lazy(() => import('../pages/Reports'));


const reportRoutes = [
    { path: '/reports', element: <PrivateRoute element={<Reports />} /> },
]

export default reportRoutes;