import { useEffect } from "react";
import { fetchTags } from "../features/tags/tagSlice";
import { fetchNotes } from "../features/notes/noteSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import Sidebar from "../components/dashboard/DbSideBar";
import NoteForm from "../components/notes/NoteForm";
import NoteCard from "../components/notes/NoteCard";
import TagForm from "../components/tags/TagForm";


export default function Dashboard() {
  const dispatch = useAppDispatch();

  const { tags, loading: loadingTags, error: errorTags } = useAppSelector((state) => state.tags);
  const { notes, loading: loadingNotes, error: errorNotes } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loadingTags || loadingNotes) {return <p>Loading...</p>;}
  if (errorTags) {return <p>Error: {errorTags}</p>;}
  if (errorNotes) {return <p>Error: {errorNotes}</p>;}

  function deleteTag(): void {}

  return (
    <div className="min-h-screen bg-[#262626] text-white">
      <Sidebar username="test2" />

      <main className="ml-[228px] min-h-screen p-5 sm:p-7">
        <div className="mx-auto max-w-[1400px] space-y-8">
          {/* Section Notes */}
          <section className="rounded-xl border border-[#383838] bg-[#171717] p-4 sm:p-5">
            <NoteForm tags={tags} />

            <div className="my-4 border-t border-[#444]" />

            <h2 className="mb-4 text-lg font-semibold">Your Notes</h2>

            {notes.length === 0 ? (
              <p className="text-sm text-gray-400">
                No notes yet. Create your first note above.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {notes.map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    tag={tags.find((tag) => tag.id === note.id) ?? null}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Section Tags */}
          <section className="rounded-xl border border-[#383838] bg-[#171717] p-4 sm:p-5">
            <h2 className="mb-4 text-lg font-semibold">Manage Tags</h2>

            <TagForm />

            {tags.length > 0 && (
              <div className="mt-5 border-t border-[#383838] pt-4">
                <h3 className="mb-3 text-sm font-medium text-gray-300">
                  Your Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="flex items-center gap-2 rounded-full border border-[#444] bg-[#262626] px-3 py-1.5 text-sm"
                    >
                      <span>{tag.name}</span>
                      <button
                        type="button"
                        onClick={() => deleteTag()}
                        aria-label={`Delete tag ${tag.name}`}
                        className="text-gray-400 hover:text-red-400"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
