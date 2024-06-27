import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../services/userApi';
import { setCredentials, clearCredentials } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
    const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
    const { isAuthenticated, user } = useSelector((state) => state.user);

    const handlerLogin = async (data) => {
        try {
            const loginRequest = await login(data).unwrap();
            dispatch(setCredentials(loginRequest));
            navigate('/');
        } catch (err) {
            toast.error(err.data || 'Ocurrió un error al iniciar sesión, intenta de nuevo');
        }
    };

    const handlerRegister = async (data) => {
        try {
            await register(data).unwrap();
            navigate('/login');
        } catch (err) {
            console.log(err)
            toast.error(err?.data?.errors[0]?.msg || 'Ocurrió un error al iniciar sesión, intenta de nuevo');
        }
    };

    const handlerLogout = () => {
        dispatch(clearCredentials());
        navigate('/');
    };

    return {
        login: handlerLogin,
        register: handlerRegister,
        logout: handlerLogout,
        loading: isLoadingLogin || isLoadingRegister,
        isAuthenticated,
        user
    };
};

export default useAuth;
