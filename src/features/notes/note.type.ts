export type NoteData = {
  user_id: number;
  tag_id: number;
  text: string;
};

export type NoteResponse = {
    message: string;
    notes: Note | Note[];
}

export type Note = {
    id: number;
    user_id: number;
    tag_id: number;
    text: string;
    created_at: string;
    updated_at: string;
}