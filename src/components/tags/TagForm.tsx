
import { useState, type FormEvent } from "react";

type TagFormProps = {
  onAddTag: (name: string) => void;
};

export default function TagForm({ onAddTag }: TagFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    onAddTag(trimmedName);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="New tag name"
        required
        className="h-7 w-full rounded-sm border border-[#d0d0d0] bg-transparent px-3 text-xs outline-none placeholder:text-gray-400 focus:border-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 text-sm transition hover:bg-blue-600"
      >
        Add Tag
      </button>
    </form>
  );
}
