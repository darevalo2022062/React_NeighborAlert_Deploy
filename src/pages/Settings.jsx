import React from 'react';
import Navbar from '../components/Navbar';
import { SettingsSidebar } from '../components/settings/SettingsSidebar';
import { AccountSettings } from '../components/settings/AccountSettings';
import useUser from '../hooks/useUser';


const Settings = () => {
    

    return (
        <>
            <Navbar />
            <div className="mx-4 min-h-[calc(100vh-96px)] max-w-screen-xl sm:mx-8 xl:mx-auto">
                <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
                    <SettingsSidebar />
                    <AccountSettings />
                </div>
            </div>
        </>
    );
}

export default Settings;
