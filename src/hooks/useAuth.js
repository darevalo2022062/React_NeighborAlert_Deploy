import React from 'react'
import { registerRequest, loginRequest } from '../services/api'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const useAuth = () => {
    const user = useSelector((state) => state.user.user)
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const registerUser = async (data) => {
        console.log(data)
        dispatch({ type: 'ADD_USER_REQUEST' });
        const response = await registerRequest(data)
        if (response.error) {
            dispatch({ type: 'ADD_TO_USER_FAILURE', payload: response.e?.response?.data || 'Ocurrió un error al agregar' });
            return toast.error(error.errors[0].msg || 'Ocurrio un error al iniciar sesion, intenta de nuevo')
        }
        dispatch({ type: 'ADD_TO_USER_SUCCESS', payload: response.data });
        navigate('/login')
        toast.success("User ")

    }

    const login = async (data) => {
        dispatch({ type: 'LOGIN_REQUEST' })
        const response = await loginRequest(data)
        if (response.error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: response.e?.response?.data || 'Ocurrió un error al Iniciar sesion' });
            return toast.error(error || 'Ocurrio un error al iniciar sesion, intenta de nuevo')
        }
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        navigate('/')
    }

    const logout = async () => {
        dispatch({ type: 'LOGOUT' })
    }

    return {
        registerUser,
        login,
        logout,
        user: user?.userDetails,
        isAuthenticated,
        loading,
        error
    }
}

export default useAuth