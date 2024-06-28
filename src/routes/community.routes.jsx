import React, { lazy } from 'react';

const Community = lazy(() => import('../pages/Community'))


const communityRoutes = [
    { path: '/community', element: <Community />, }
]

export default communityRoutes;