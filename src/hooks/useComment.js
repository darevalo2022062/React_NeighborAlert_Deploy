import { useCreateCommentMutation } from "../services/commentApi";
import toast from "react-hot-toast";

const useComment = () => {
    const [createCommentMutation] = useCreateCommentMutation();

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

    return { createComment };
};

export default useComment;
