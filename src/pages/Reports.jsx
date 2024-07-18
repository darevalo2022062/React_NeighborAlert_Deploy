import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'
import Footer from '../components/common/Footer';
import EnterCommunity from '../components/report/EnterCommunity';
import { FormReport } from '../components/report/FormReport';
import { Publication } from '../components/common/Publication';
import usePost from '../hooks/usePost';
import { useEffect } from 'react'


const Reports = () => {
    const { user } = useAuth();

    const { posts, isLoadingPosts, error, deletePost } = usePost();

    return (
        <>
            <Navbar />
            {user.idCommunity == null ? (
                <EnterCommunity />
            ) : (isLoadingPosts ? (
                <div className='min-h-[calc(100vh-96px)] flex justify-center items-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div className='min-h-[calc(100vh-96px)] flex justify-center mb-6'>
                    <div className='max-w-lg w-full'>
                        <FormReport  />
                        <div className='flex flex-col items-center'>
                            {posts.map(post => (
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
