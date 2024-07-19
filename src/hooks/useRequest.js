
import { useCreateRequestMutation, useGetAllRequestQuery, useAcceptRequestMutation } from '../services/requestApi';
import toast from "react-hot-toast";

const useRequest = () => {

    const [createOnceRequest, { isLoading: isLoadingCreateRequest }] = useCreateRequestMutation();
    const [acceptRequest, { isLoading: isLoadingAcceptRequest }] = useAcceptRequestMutation();

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.message
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';

        toast.error(errorMessage);
    };


    const handlerGetAllRequest = () => {
        const { data, error, isLoading, refetch } = useGetAllRequestQuery();
        return { data, error, isLoading, refetch };
    };

    const createRequest = async (data) => {
        console.log('Data in request:', data);
        try {
            await createOnceRequest(data).unwrap();
            toast.success("Request Created Successfully");
        } catch (err) {
            handleError(err);
        }
    }

    const handlerAcceptRequest = async (id) => {
        try {
            await acceptRequest(id).unwrap();
            toast.success("User is now an admin");
        } catch (err) {
            handleError(err);
        }
    };

    return {
        getAllRequest: handlerGetAllRequest,
        createRequest,
        acceptRequest: handlerAcceptRequest,
        isLoadingCreateRequest
    }

}

export default useRequest;