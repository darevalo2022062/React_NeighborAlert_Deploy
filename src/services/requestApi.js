import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const requestApi = createApi({
    reducerPath: 'requestApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createRequest: builder.mutation({
            query: (data) => ({
                url: '/request/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Request'],
        }),
        getAllRequest: builder.query({
            query: () => ({
                url: '/request/all',
                method: 'GET',
            }),
            providesTags: ['Request'],
            transformResponse: (response) => response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        }),
        acceptRequest: builder.mutation({
            query: (id) => ({
                url: `/request/accept/${id}`,
                method: 'PUT',
            }),
            providesTags: ['Request'],
            transformResponse: (response) => response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        }),

    }),
});

export const { useCreateRequestMutation, useGetAllRequestQuery, useAcceptRequestMutation } = requestApi;
