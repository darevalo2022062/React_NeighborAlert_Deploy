import React from 'react'
import { useEnterCommunityMutation } from '../services/userApi'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { updateCredentials } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const useUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [enterCommunity, { isLoading: isLoadingEnterCommunity }] = useEnterCommunityMutation();

    const handlerEnterCommunity = async (data) => {
        try {
            const user = await enterCommunity(data).unwrap();
            console.log(user)
            dispatch(updateCredentials(user))
            navigate('/reports');
        } catch (err) {
            console.log(err)
            const errorMessage = err?.data?.errors ? err.data.errors[0]?.msg : err?.data?.error || 'Ocurrió un error al registrarse, intenta de nuevo';
            toast.error(errorMessage);
        }
    };

    return {
        enterCommunity: handlerEnterCommunity,
        loading: isLoadingEnterCommunity

    }

}

export default useUser