import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../services/userApi';
import { setCredentials, clearCredentials } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
    const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
    const { isAuthenticated, user } = useSelector((state) => state.user);

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

    const handlerLogin = async (data) => {
        try {
            const loginRequest = await login(data).unwrap();
            console.log(loginRequest)
            dispatch(setCredentials(loginRequest));
            navigate('/reports');
            toast.success('Successfully logged in');
        } catch (err) {
            console.log(err)
            const errorMessage = err?.data?.errors ? err.data.errors[0]?.msg : err?.data?.error || 'Ocurrió un error al registrarse, intenta de nuevo';
            toast.error(errorMessage);
        }
    };

    const handlerRegister = async (data) => {
        try {
            const formData = prepareFormData(data);
            await register(formData).unwrap();
            navigate('/login');
            toast.success('You have successfully registered');
        } catch (err) {
            console.log(err)
            const errorMessage = err?.data?.errors ? err.data.errors[0]?.msg : err?.data?.error || 'Ocurrió un error al registrarse, intenta de nuevo';
            toast.error(errorMessage);
        }
    };

    const handlerLogout = () => {
        dispatch(clearCredentials());
        navigate('/');
    };

    return {
        login: handlerLogin,
        register: handlerRegister,
        logout: handlerLogout,
        loading: isLoadingLogin || isLoadingRegister,
        isAuthenticated,
        user
    };
};

export default useAuth;
