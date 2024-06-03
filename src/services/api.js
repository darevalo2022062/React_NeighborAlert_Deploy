import axios from 'axios';
import { store } from '../store/store.js';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/neighbor/v1',
    timeout: 5000
});



apiClient.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const { token } = state.user.user?.useDetails || {};

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const registerRequest = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const loginRequest = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}



