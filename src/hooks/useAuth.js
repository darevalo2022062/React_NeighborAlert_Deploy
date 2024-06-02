import React from 'react'
import { registerRequest } from '../services/api'
import { useSelector, useDispatch } from 'react-redux';

const useAuth = () => {
    const user = useSelector((state) => state.user.user)
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

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
        dispatch({ type: 'ADD_TO_USER_SUCCESS', payload: response.data });
        console.log(user)
    }

    return {
        registerUser,
        user,
        loading,
        error
    }
}

export default useAuth