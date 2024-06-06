import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
// import persistStore from 'redux-persist/es/persistStore';
// import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
