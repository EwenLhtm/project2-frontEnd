
import { useState, type FormEvent } from "react";
import type { Tag } from "../../features/tags/tag.type";
import { getCurrentUser } from "../../features/auth/authService";
import { createNote } from "../../features/notes/noteService";
import { useAppDispatch } from "../../hooks/redux";
import { fetchNotes } from "../../features/notes/noteSlice";

type NoteFormProps = {
  tags: Tag[];
};

export default function NoteForm({ tags }: NoteFormProps) {
  const dispatch = useAppDispatch();

  const [content, setContent] = useState("");
  const [tagId, setTagId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedContent = content.trim();
    if (!trimmedContent || !tagId) return;

    setError("");
    setLoading(true);

    try {
      const user = await getCurrentUser();
      await createNote({ text: trimmedContent, tag_id: parseInt(tagId), user_id: user.id });
      await dispatch(fetchNotes()).unwrap();

      setContent("");
      setTagId("");
    } catch (error: any) {
      setError(error.message || "Failed to create note");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Write your note..."
        rows={2}
        required
        className="min-h-14 w-full resize-y border border-[#d0d0d0] bg-transparent p-2 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
      />

      <select
        value={tagId}
        onChange={(event) => setTagId(event.target.value)}
        className="h-9 w-full border border-[#d0d0d0] bg-[#171717] px-2 text-sm outline-none focus:border-blue-500"
      >
        <option value="">-- Select Tag --</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 text-sm transition hover:bg-blue-600"
      >
        
        {loading ? "Creating..." : "Create Note"}
      </button>
    </form>
  );
}
