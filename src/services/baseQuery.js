import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/neighbor/v1',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        console.log('State:', state); // Debugging state
        const { token } = state.user || {};

        if (token) {
            console.log('Token:', token); // Debugging token
            headers.set('Authorization', `${token}`);
        } else {
            console.warn('No token found in state');
        }
        return headers;
    },
});

export default baseQuery;
