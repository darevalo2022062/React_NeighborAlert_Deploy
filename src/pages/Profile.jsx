import React from 'react';
import Navbar from '../components/Navbar';
import { Content } from '../components/profile/Content';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <div className="w-full flex flex-row bg-gray-50 h-[calc(100vh-96px)] overflow-hidden">
                <Content />
            </div>
        </>
    );
};

export default Profile;
