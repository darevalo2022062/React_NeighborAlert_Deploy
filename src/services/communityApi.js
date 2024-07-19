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

        //name, location, img, description
        UpdateCommunity: builder.mutation({
            query: (data) => ({
                url: `/community/${data.id}`,
                method: 'PUT',
                body: data,
            })
        }),

        //name, location, img, description
        UpdateCommunityImg: builder.mutation({
            query: (data) => ({
                url: `/community/${data.get('id')}`,
                method: 'PUT',
                body: data,
            })
        }),

        //name, location, img, description
        createCommunity: builder.mutation({
            query: (data) => ({
                url: '/community/',
                method: 'POST',
                body: data,
            })
        }),

        deleteCommunity: builder.mutation({
            query: (data) => ({
                url: `/community/${data.id}`,
                method: 'DELETE',
                body: data,
            })
        })
    }),
});

export const { useGetCommunitiesQuery, useGetCommunityByIdQuery, useCreateCommunityMutation, useUpdateCommunityMutation, useUpdateCommunityImgMutation, useDeleteCommunityMutation } = communityApi;