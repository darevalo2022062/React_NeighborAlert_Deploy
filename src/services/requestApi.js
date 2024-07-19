import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const requestApi = createApi({
    reducerPath: 'requestApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        //message, terms
        createRequest: builder.mutation({
            query: (data) => ({
                url: '/request/create',
                method: 'POST',
                body: data,
            })
        }),

    }),
});

export const { useCreateRequestMutation } = requestApi;
