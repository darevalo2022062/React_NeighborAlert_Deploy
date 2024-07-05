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


    const { posts, isLoadingPosts, error } = usePost();





    console.log('posts:', posts);
    if (isLoadingPosts) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Navbar />
            {user.idCommunity == null ? (
                <EnterCommunity />
            ) : (
                <div className='flex justify-center'>
                    <div className='max-w-5xl w-full p-8'>
                        <div className='flex justify-end'>
                            <FormReport />
                        </div>
                        <div className='flex flex-col items-center'>
                            {posts.map(post => (
                                <Publication key={post._id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Reports;
