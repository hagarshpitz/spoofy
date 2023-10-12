import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import songReducer from './songSlice';
import songListReducer from './songsListSlice';
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH, REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE, REGISTER
} from 'redux-persist'

const reducers = combineReducers({ user: userReducer, song: songReducer, songList: songListReducer });
const persistConfig = {
    key: 'spoofyApp',
    storage
};

const persistentReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistentReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch