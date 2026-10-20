import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { User } from './auth.types';
import { getCurrentUser } from './authService';

type AuthState = {
    user: User | null;
    loading: boolean;
    error: string | null;
};

const initialState: AuthState = {
    user: null,
    loading: true,
    error: null,
};

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            return await getCurrentUser();
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch current user');
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuth(state) {
            state.user = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;