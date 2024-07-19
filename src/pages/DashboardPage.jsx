import React from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';

const DashboardPage = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6 bg-gray-100">
                    <h1 className="text-3xl font-bold">DashboardPage</h1>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;