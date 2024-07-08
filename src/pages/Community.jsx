import React from 'react';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import useCommunity from '../hooks/useCommunity';
import { Section } from '../components/communities/Section';
import Footer from '../components/common/Footer';

const Community = () => {
    const { user } = useAuth();
    const { getCommunityById } = useCommunity();
    const { data: community, isLoading: isLoadingCommunity } = getCommunityById(user.idCommunity);

    return (
        <>
            <Navbar />
            {isLoadingCommunity ? (
                <div className='min-h-[calc(100vh-96px)] flex justify-center items-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : (
                <Section community={community} />
            )}
            <Footer />


        </>
    );
};

export default Community;
