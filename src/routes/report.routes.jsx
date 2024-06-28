import React, { lazy } from 'react';

const Reports = lazy(() => import('../pages/Reports'));

const reportRoutes = [
    { path: '/reports', element: <Reports /> },
]

export default reportRoutes;