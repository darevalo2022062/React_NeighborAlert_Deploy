import React from 'react'
import { useGetCommunitiesQuery, useGetCommunityByIdQuery } from '../services/communityApi'
import { toast } from 'react-hot-toast';


const useCommunity = () => {

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';

        toast.error(errorMessage);
    };

    const getCommunityById = (id) => {
        const { data, error, isLoading } = useGetCommunityByIdQuery(id, {
            skip: !id,
        });
        console.log('data', error)
        if (error) return handleError(error);

        return { data, isLoading, error };
    };


    return {
        getCommunityById,
    }
}

export default useCommunity