
import type { Note } from "../../features/notes/note.type";
import type { Tag } from "../../features/tags/tag.type";
import { deleteNote } from "../../features/notes/noteService";
import { useAppDispatch } from "../../hooks/redux";
import { fetchNotes } from "../../features/notes/noteSlice";

type NoteCardProps = {
  note: Note;
  tag: Tag | null;
};

export default function NoteCard({
  note,
  tag
}: NoteCardProps) {
  const dispatch = useAppDispatch();

  async function handleDelete() {
    try {
      await deleteNote(note.id);
      await dispatch(fetchNotes()).unwrap();

    } catch (error: any) {
      console.error("Error deleting note:", error.message);
    }
  }
  return (
    <article className="rounded-lg border border-[#383838] bg-[#202020] p-4">
      <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-200">
        {note.text}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#383838] pt-3">
        {tag ? (
          <span className="rounded-full bg-blue-950 px-2.5 py-1 text-xs text-blue-200">
            {tag.name}
          </span>
        ) : (
          <span className="text-xs text-gray-500">No tag</span>
        )}

        <button
          type="button"
          onClick={() => handleDelete()}
          className="text-xs text-gray-400 transition hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
