import { useCreatePostMutation, useGetPostsByCommunityQuery } from "../services/postApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { useEffect } from "react";

const usePost = () => {
    const [createPost, { isLoading: isLoadingCreatePost }] = useCreatePostMutation();
    const { data: posts, error, isLoading: isLoadingPosts, refetch } = useGetPostsByCommunityQuery();
    const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        refetch();
    }, [refetch]);

    const handlerCreatePost = async (data, closeModal) => {
        try {
            console.log(user.idCommunity);
            const postData = { ...data, idCommunity: user.idCommunity }; // Agregar idCommunity a data
            await createPost(postData).unwrap();
            closeModal();
            toast.success('Your publication has been created');
            navigate('/reports');
        } catch (err) {
            console.log(err);
            const errorMessage = err?.data?.errors?.[0]?.msg
                || err?.data
                || err?.data.error
                || 'An error occurred, please try again';
            toast.error(errorMessage);
        }
    };

    return {
        loading: isLoadingCreatePost,
        createPost: handlerCreatePost,
        posts,
        isLoadingPosts,
        error
    };
};

export default usePost;
