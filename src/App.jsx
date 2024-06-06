import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from './pages/Loading';
import { Toaster } from 'react-hot-toast';
import routes from './routes';

const Routes = () => {
    const routing = useRoutes(routes);
    return routing;
};

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes />
            <Toaster position="top-center" reverseOrder={false} />
        </Suspense>
    );
};

export default App;
