import React from 'react';
import { Publication } from '../../components/common/Publication'
import useAuth from '../../hooks/useAuth';
import usePost from '../../hooks/usePost';

export const Content = () => {
    const { user } = useAuth();

    const { posts, isLoadingPosts, error, deletePost } = usePost();
    return (
        <div className="w-full p-5 md:px-12 lg:24 h-full ">
            <div className="mt-3 flex flex-col items-center">
                {posts.map(post => (
                    <Publication key={post._id} post={post} deletePost={deletePost} user={user} />
                ))}
            </div>
        </div>
    );
};
