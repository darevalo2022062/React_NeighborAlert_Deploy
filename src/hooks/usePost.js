import { useCreatePostMutation, useGetPostsByCommunityQuery, useDeletePostMutation } from "../services/postApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { useEffect } from "react";

const usePost = () => {
    const [createPost, { isLoading: isLoadingCreatePost }] = useCreatePostMutation();
    const [deletePost] = useDeletePostMutation();
    const { data: posts, error, isLoading: isLoadingPosts, refetch } = useGetPostsByCommunityQuery();

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [refetch]);

    const prepareFormData = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key === 'file' && data[key].length > 0) {
                for (let i = 0; i < data[key].length; i++) {
                    formData.append(key, data[key][i]);
                }
            } else {
                formData.append(key, data[key]);
            }
        });
        return formData;
    };

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };

    const handlerCreatePost = async (data, closeModal) => {
        try {
            const formData = prepareFormData({ ...data, idCommunity: user.idCommunity });
            console.log("🚀 ~ handlerCreatePost ~ formData:", formData)
            await createPost(formData).unwrap();
            closeModal();
            toast.success('Your publication has been created');
            navigate('/reports');
        } catch (err) {
            handleError(err);
        }
    };

    const handlerDeletePost = async (id) => {
        try {
            await deletePost(id).unwrap();
            toast.success('Post deleted successfully');
        } catch (err) {
            handleError(err);
        }
    };

    return {
        loading: isLoadingCreatePost,
        createPost: handlerCreatePost,
        deletePost: handlerDeletePost,
        posts,
        isLoadingPosts,
        error
    };
};

export default usePost;
