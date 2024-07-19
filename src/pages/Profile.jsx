import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import usePost from '../hooks/usePost';
import { Publication } from '../components/common/Publication';
import { ProfileHeader } from '../components/profile/ProfileHeader';

const filters = [
    { value: 'all', label: 'All' },
    { value: '#general', label: 'General' },
    { value: '#event', label: 'Event' },
    { value: '#news', label: 'News' },
    { value: '#job', label: 'Job' },
    { value: '#housing', label: 'Housing' }
];

const Profile = () => {
    const { user } = useAuth();
    const { getMyPost, deletePost } = usePost();
    const { data, isLoading, error, refetch } = getMyPost();
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
        refetch();
    }, [refetch]);

    const filteredData = selectedFilter === 'all' ? data : data?.filter(post => post.category === selectedFilter) || [];

    return (
        <>
            <Navbar />
            <ProfileHeader user={user} />
            {(isLoading ? (
                <div className='min-h-[calc(100vh-96px)] flex justify-center items-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div className='min-h-[calc(100vh-96px)] flex flex-col items-center mb-6'>
                    <div className='max-w-md w-full'>
                        <div className='mt-4 flex justify-center space-x-2'>
                            {filters.map(filter => (
                                <button
                                    key={filter.value}
                                    className={`px-4 py-2 w-32 text-center rounded-full border-2 transition duration-300 ease-in-out transform hover:scale-105 ${selectedFilter === filter.value ? 'bg-[#84BD00] text-white border-[#84BD00]' : 'bg-white text-gray-700 border-gray-300 hover:bg-[#DFF5CC]'}`}
                                    onClick={() => setSelectedFilter(filter.value)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                        <div className='mt-6 flex flex-col items-center'>
                            {filteredData.map(post => (
                                <Publication key={post._id} post={post} deletePost={deletePost} user={user} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;
