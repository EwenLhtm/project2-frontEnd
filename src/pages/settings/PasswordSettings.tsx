import { useState } from "react";
import { updatePassword } from "../../features/auth/authService";

export default function PasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedCurrentPassword = currentPassword.trim();
    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    if (!trimmedCurrentPassword || !trimmedNewPassword || !trimmedConfirmPassword) return;

    setError("");
    setLoading(true);

    try {
      await updatePassword({
        current_password: trimmedCurrentPassword,
        new_password: trimmedNewPassword,
        new_password_confirmation: trimmedConfirmPassword
      });
      setSuccess(true);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-sm font-semibold">Password</h2>
      <p className="mt-2 text-sm text-gray-400">
        Update your password
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        {[
          { id: "current-password", label: "Current password", value: currentPassword, onChange: setCurrentPassword },
          { id: "new-password", label: "New password", value: newPassword, onChange: setNewPassword },
          { id: "confirm-password", label: "Confirm password", value: confirmPassword, onChange: setConfirmPassword },
        ].map(({ id, label, value, onChange }) => (
          <div key={id}>
            <label htmlFor={id} className="mb-2 block text-sm font-medium">
              {label}
            </label>
            <input
              id={id}
              name={id}
              type="password"
              autoComplete="off"
              className="w-full rounded-md border border-[#505050] bg-[#383838] px-3 py-2 text-sm outline-none transition focus:border-gray-400"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        ))}

        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-sm text-green-500">
          Password updated successfully!
        </p>
      )}
      {error && (
        <p className="mt-4 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
