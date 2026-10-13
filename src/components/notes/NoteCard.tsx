
import type { Note, Tag } from "../../pages/DashboardPage";

type NoteCardProps = {
  note: Note;
  tag: Tag | null;
  onDelete: (id: string) => void;
};

export default function NoteCard({
  note,
  tag,
  onDelete,
}: NoteCardProps) {
  return (
    <article className="rounded-lg border border-[#383838] bg-[#202020] p-4">
      <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-200">
        {note.content}
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
          onClick={() => onDelete(note.id)}
          className="text-xs text-gray-400 transition hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
