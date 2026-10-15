export default function PasswordSettings() {
  return (
    <div>
      <h2 className="text-sm font-semibold">Password</h2>
      <p className="mt-2 text-sm text-gray-400">
        Update your password
      </p>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-6 space-y-5"
      >
        {[
          { id: "current-password", label: "Current password" },
          { id: "new-password", label: "New password" },
          { id: "confirm-password", label: "Confirm password" },
        ].map(({ id, label }) => (
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
            />
          </div>
        ))}

        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}