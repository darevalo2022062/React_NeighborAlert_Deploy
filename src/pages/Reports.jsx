import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import Footer from '../components/common/Footer';
import EnterCommunity from '../components/report/EnterCommunity';
import CreateCommunity from '../components/report/CreateCommunity';
import { FormReport } from '../components/report/FormReport';
import { Publication } from '../components/common/Publication';
import usePost from '../hooks/usePost';

const filters = [
    { value: 'all', label: 'All' },
    { value: '#general', label: 'General' },
    { value: '#event', label: 'Event' },
    { value: '#news', label: 'News' },
    { value: '#job', label: 'Job' },
    { value: '#housing', label: 'Housing' }
];

const Reports = () => {
    const { user } = useAuth();
    const { deletePost, getPostByCommunity } = usePost();
    const { data, refetch, isLoading, error } = getPostByCommunity();
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
        refetch();
    }, [refetch]);

    const filteredData = selectedFilter === 'all' ? data : data?.filter(post => post.category === selectedFilter) || [];

    return (
        <>
            <Navbar />
            {user.idCommunity == null ? (
                user.role === 'ADMIN' ? (
                    <CreateCommunity />
                ) : (
                    <EnterCommunity />
                )
            ) : (isLoading ? (
                <div className='min-h-[calc(100vh-96px)] flex justify-center items-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div className='min-h-[calc(100vh-96px)] flex flex-col items-center mb-6'>
                    <div className='max-w-md w-full'>
                        <FormReport />
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
                        <div className=' flex flex-col items-center'>
                            {filteredData.map(post => (
                                <Publication key={post._id} post={post} deletePost={deletePost} user={user} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </>
    );
}

export default Reports;
