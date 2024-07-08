import { useEnterCommunityMutation, useDeleteAccountMutation } from '../services/userApi'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { updateCredentials, clearCredentials } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const useUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [deleteAccount, { isLoading: isLoadingDeleteAccount }] = useDeleteAccountMutation();
    const [enterCommunity, { isLoading: isLoadingEnterCommunity }] = useEnterCommunityMutation();

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };

    const handlerEnterCommunity = async (data) => {
        try {
            const user = await enterCommunity(data).unwrap();
            console.log(user)
            dispatch(updateCredentials(user))
            navigate('/reports');
            toast.success('You have successfully logged in to your community');
        } catch (err) {
            handleError(err);
        }
    };

    const handlerDeleteAccount = async (data) => {
        try {
            await deleteAccount(data).unwrap();
            dispatch(clearCredentials())
            navigate('/');
            toast.success('Your account has been successfully deleted');
        } catch (err) {
            handleError(err);
        }
    };

    return {
        deleteAccount: handlerDeleteAccount,
        enterCommunity: handlerEnterCommunity,
        loading: isLoadingEnterCommunity || isLoadingDeleteAccount

    }

}

export default useUser