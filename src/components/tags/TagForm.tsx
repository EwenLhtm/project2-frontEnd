import { useState, type FormEvent } from "react";
import { createTag } from "../../features/tags/tagService";
import { useAppDispatch } from "../../hooks/redux";
import { fetchTags } from "../../features/tags/tagSlice";

export default function TagForm() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    setError("");
    setLoading(true);

    try {
      await createTag({ name: trimmedName });
      await dispatch(fetchTags()).unwrap();

      setName("");
    } catch (error: any) {
      setError(error.message || "Failed to create tag");
    } finally {
      setLoading(false);
    }
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

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 text-sm transition hover:bg-blue-600"
      >
        {loading ? "Creating..." : "Create Tag"}
      </button>
    </form>
  );
}
