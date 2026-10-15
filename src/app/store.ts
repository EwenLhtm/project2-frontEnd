import { configureStore } from '@reduxjs/toolkit';
import tagReducer from '../features/tags/tagSlice';
import noteReducer from '../features/notes/noteSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        tags: tagReducer,
        notes: noteReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;