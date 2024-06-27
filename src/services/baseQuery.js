import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/neighbor/v1',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        const { token } = state.user || {};
        console.log('Estado actual del usuario:', state.user); // Imprime todo el estado del usuario
        console.log('Token:', token); // Imprime el token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export default baseQuery;
