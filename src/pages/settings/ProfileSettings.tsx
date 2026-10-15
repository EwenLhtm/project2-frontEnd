import { useState } from "react";
import { updateProfile } from "../../features/auth/authService";
import { fetchCurrentUser } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function ProfileSettings() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;

    setError("");
    setLoading(true);

    try {
      await updateProfile({ name: trimmedName, email: trimmedEmail });
      await dispatch(fetchCurrentUser()).unwrap();

      setSuccess(true);
    }catch (error: any) {
      setError(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-sm font-semibold">Profile</h2>
      <p className="mt-2 text-sm text-gray-400">
        Update your name and email address
      </p>

      <form
        onSubmit={(event) => handleSubmit(event)}
        className="mt-6 space-y-5"
      >
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-[#505050] bg-[#383838] px-3 py-2 text-sm outline-none transition focus:border-gray-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-[#505050] bg-[#383838] px-3 py-2 text-sm outline-none transition focus:border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>

      {success && (
        <p className="mt-3 text-sm text-green-500">
          Profile updated successfully!
        </p>
      )}
      {error && (
        <p className="mt-3 text-sm text-red-500">
          {error}
        </p>
      )}

      <div className="mt-9 border-t border-[#3b3b3b] pt-6">
        <h3 className="text-sm font-medium">Delete account</h3>
        <p className="mt-2 text-sm text-gray-400">
          Delete your account and all of its resources
        </p>

        <button
          type="button"
          className="mt-4 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Delete account
        </button>
      </div>
    </div>
  );
}