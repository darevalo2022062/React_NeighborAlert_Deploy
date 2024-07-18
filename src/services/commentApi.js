import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: (data) => ({
                url: 'comment/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useCreateCommentMutation } = commentApi;
