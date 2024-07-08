import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const communityApi = createApi({
    reducerPath: 'communityApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getCommunityById: builder.query({
            query: (id) => ({
                url: `/community/${id}`,
                method: 'GET',
            }),

        }),
        getCommunities: builder.query({
            query: () => ({
                url: `/community/`,
                method: 'GET',
            }),

        }),
    }),
});

export const { useGetCommunitiesQuery, useGetCommunityByIdQuery } = communityApi;