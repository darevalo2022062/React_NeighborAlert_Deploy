import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: baseQuery,
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: (data) => ({
                url: 'comment/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Comments'],
        }),
        getCommentsByPost: builder.query({
            query: (id) => ({
                url: `comment/getComments/${id}`,
                method: 'GET',
            }),
            providesTags: ['Comments'],
            transformResponse: (response) => response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        }),
    }),
});

export const { useCreateCommentMutation, useGetCommentsByPostQuery } = commentApi;
