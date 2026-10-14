import { configureStore } from '@reduxjs/toolkit';
import tagReducer from '../features/tags/tagSlice';
import noteReducer from '../features/notes/noteSlice';

export const store = configureStore({
    reducer: {
        tags: tagReducer,
        notes: noteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;