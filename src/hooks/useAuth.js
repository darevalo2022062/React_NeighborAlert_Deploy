import React from 'react'
import { registerRequest, loginRequest } from '../services/api'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
            console.log(response.e); // Imprime el objeto de error
            console.log(response.e?.response); // Imprime la respuesta del servidor
            console.log(response.e?.response?.data); // Imprime los datos de la respuesta
            dispatch({ type: 'ADD_TO_USER_FAILURE', payload: response.e?.response?.data || 'Ocurrió un error al agregar' });
            console.log(error.error);
        }
        console.log(response.data)
        dispatch({ type: 'ADD_TO_USER_SUCCESS', payload: response.data });
    }

    const login = async (data) => {
        console.log(data)
        dispatch({ type: 'LOGIN_REQUEST' })
        const response = await loginRequest(data)
        if (response.error) {
            console.log(response.e); // Imprime el objeto de error
            console.log(response.e?.response); // Imprime la respuesta del servidor
            console.log(response.e?.response?.data); // Imprime los datos de la respuesta
            dispatch({ type: 'LOGIN_FAILURE', payload: response.e?.response?.data || 'Ocurrió un error al agregar' });
            console.log(error.error);
        }
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        navigate('/');
        isAuthenticated
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