import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Tag } from './tag.type';
import { getAllTags } from './tagService';

type TagState = {
    tags: Tag[];
    loading: boolean;
    error: string | null;
};

const initialState: TagState = {
    tags: [],
    loading: false,
    error: null,
};

export const fetchTags = createAsyncThunk(
    'tags/fetchTags',
    async (_, { rejectWithValue }) => {
        try {
            return await getAllTags();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const tagSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        clearTags(state) {
            state.tags = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { clearTags } = tagSlice.actions;
export default tagSlice.reducer;