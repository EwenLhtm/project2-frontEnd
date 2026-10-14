import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Note } from './note.type';
import { getAllNotes } from './noteService';

type NoteState = {
    notes: Note[];
    loading: boolean;
    error: string | null;
};

const initialState: NoteState = {
    notes: [],
    loading: false,
    error: null,
};

export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async (_, { rejectWithValue }) => {
        try {
            return await getAllNotes();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        clearNotes(state) {
            state.notes = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { clearNotes } = noteSlice.actions;
export default noteSlice.reducer;