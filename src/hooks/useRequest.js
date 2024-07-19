
import { useCreateRequestMutation } from '../services/requestApi';
import toast from "react-hot-toast";

const useRequest = () => {

    const [createOnceRequest, { isLoading: isLoadingCreateRequest }] = useCreateRequestMutation();

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';

        toast.error(errorMessage);
    };

    const createRequest = async (data) => {
        console.log('Data in request:', data);
        try {
            await createOnceRequest(data).unwrap();
            //console.log("Data que devuelve: ", user);
            toast.success("Request Created Successfully");
        } catch (err) {
            handleError(err);
        }

    }

    return {
        createRequest,
        isLoadingCreateRequest
    }

}

export default useRequest;