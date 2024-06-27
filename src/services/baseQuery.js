// services/baseQuery.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store/store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/neighbor/v1',
    prepareHeaders: (headers) => {
        const state = store.getState();
        const { token } = state.user || {};
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export default baseQuery;
