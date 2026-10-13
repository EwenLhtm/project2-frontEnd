
import { useState, type FormEvent } from "react";
import type { Tag } from "../../pages/DashboardPage";

type NoteFormProps = {
  tags: Tag[];
  onAddNote: (content: string, tagId: string | null) => void;
};

export default function NoteForm({ tags, onAddNote }: NoteFormProps) {
  const [content, setContent] = useState("");
  const [tagId, setTagId] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!content.trim()) return;

    onAddNote(content.trim(), tagId || null);
    setContent("");
    setTagId("");
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

      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 text-sm transition hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
}
