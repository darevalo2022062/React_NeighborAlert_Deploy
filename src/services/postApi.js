import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (data) => ({
                url: 'post/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Posts'],
        }),
        getPostsByCommunity: builder.query({
            query: () => ({
                url: 'post/community',
                method: 'GET',
            }),
            providesTags: ['Posts'],
            transformResponse: (response) => response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        }),

    }),
});

export const { useCreatePostMutation, useGetPostsByCommunityQuery } = postApi;