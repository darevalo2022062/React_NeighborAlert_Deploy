import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        deleteAccount: builder.mutation({
            query: () => ({
                url: 'user/',
                method: 'DELETE'
            }),
        }),
        enterCommunity: builder.mutation({
            query: (data) => ({
                url: 'user/community',
                method: 'PUT',
                body: data,
            }),
        })
    }),
});

export const { useLoginMutation, useRegisterMutation, useDeleteAccountMutation, useEnterCommunityMutation } = userApi;
