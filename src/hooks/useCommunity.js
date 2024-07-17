import React from 'react'
import { useGetCommunitiesQuery, useGetCommunityByIdQuery, useCreateCommunityMutation } from '../services/communityApi'

const [createCommunity] = useCreateCommunityMutation();

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

        if (error) handleError(error);

        return { data, isLoading };
    };

    const createCommunity = async (data) => {

        try {
            await createCommunity(data).unwrap();
            toast.success("Community Created Successfully");
        } catch (err) {
            handleError(err);
        }

    }


    return {
        getCommunityById,
        createCommunity
    }
}

export default useCommunity