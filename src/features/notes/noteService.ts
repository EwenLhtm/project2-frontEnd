import type { NoteData, NoteResponse, Note } from './note.type';

const API_URL = import.meta.env.VITE_API_URL as string;

export async function createNote(
    data: NoteData
): Promise<NoteResponse> {
    const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to create note');
    }

    const noteData = await response.json() as NoteResponse;
    return noteData;
}

export async function getAllNotes(): Promise<Note[]> {
    const response = await fetch(`${API_URL}/notes`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to get all notes');
    }

    const notesData = await response.json() as NoteResponse;
    const notes = notesData.notes as Note[];
    return notes;
}

export async function deleteNote(noteId: number): Promise<void> {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(errorData?.message || 'Failed to delete note');
    }
}