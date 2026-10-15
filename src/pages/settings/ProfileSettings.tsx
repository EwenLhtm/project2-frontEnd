export default function ProfileSettings() {
  return (
    <div>
      <h2 className="text-sm font-semibold">Profile</h2>
      <p className="mt-2 text-sm text-gray-400">
        Update your name and email address
      </p>

      <form
        onSubmit={(event) => event.preventDefault()}
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
            defaultValue="test2"
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
            defaultValue="test2@gmail.com"
            className="w-full rounded-md border border-[#505050] bg-[#383838] px-3 py-2 text-sm outline-none transition focus:border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Save
        </button>
      </form>

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