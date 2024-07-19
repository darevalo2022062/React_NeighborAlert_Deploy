import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://node-js-neighbor-alert-deploy.vercel.app/neighbor/v1',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        const { token } = state.user || {};

        if (token) {
            headers.set('Authorization', `${token}`);
        } else {
            console.warn('No token found in state');
        }
        return headers;
    },
});

export default baseQuery;
