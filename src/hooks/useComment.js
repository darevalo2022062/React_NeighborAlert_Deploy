import { useCreateCommentMutation, useGetCommentsByPostQuery } from "../services/commentApi";
import toast from "react-hot-toast";

const useComment = (postId) => {
    const [createCommentMutation] = useCreateCommentMutation();
    const { data: comments, error, isLoading } = useGetCommentsByPostQuery(postId);
    console.log("🚀 ~ useComment ~ comments:", comments)

    const createComment = async (data) => {
        try {
            const comment = await createCommentMutation(data).unwrap();
            toast.success('Comment added successfully');
            return comment;
        } catch (error) {
            console.error('Error creating comment:', error);
            toast.error('Failed to add comment');
            throw error;
        }
    };

    const quantity = comments ? comments.length : 0;

    return {
        createComment,
        comments,
        error,
        isLoading,
        quantity
    };
};

export default useComment;
