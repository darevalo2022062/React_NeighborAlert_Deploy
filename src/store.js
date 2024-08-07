import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userApi';
import { postApi } from './services/postApi';
import { communityApi } from './services/communityApi';
import { commentApi } from './services/commentApi';
import { requestApi } from './services/requestApi';

import userReducer from './features/userSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';


const persistConfig = {
    key: 'root',
    storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [communityApi.reducerPath]: communityApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [requestApi.reducerPath]: requestApi.reducer,
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(userApi.middleware, postApi.middleware, communityApi.middleware, commentApi.middleware, requestApi.middleware),
});

export const persistor = persistStore(store);