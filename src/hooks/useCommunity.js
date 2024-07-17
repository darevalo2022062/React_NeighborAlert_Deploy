import React from 'react'
import { useGetCommunitiesQuery, useGetCommunityByIdQuery, useCreateCommunityMutation } from '../services/communityApi'
import { updateCredentials, clearCredentials } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";



const useCommunity = () => {
    const dispatch = useDispatch();
    const [createOnceCommunity, { isLoading: isLoadingCreateCommunity } ] = useCreateCommunityMutation();

    const prepareFormData = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key === 'img' && data[key][0]) {
                formData.append(key, data[key][0]); // Append file
            } else {
                formData.append(key, data[key]);
            }
        });
        return formData;
    };

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
        console.log('Data in community:', data);
        try {
            const formData = prepareFormData(data);
            const user = await createOnceCommunity(formData).unwrap();
            console.log("Data que devuelve: ", user);
            dispatch(updateCredentials(user))
            toast.success("Community Created Successfully");
        } catch (err) {
            handleError(err);
        }

    }


    return {
        getCommunityById,
        createCommunity,
        isLoading: isLoadingCreateCommunity
    }
}

export default useCommunity