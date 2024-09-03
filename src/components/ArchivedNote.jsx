/** @format */

import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNotes({ notes, deleteNote, toggleArchive }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Catatan Diarsipkan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archivedNotes.length === 0 ? (
          <p className="col-span-full text-center text-xl">
            Tidak ada catatan diarsipkan
          </p>
        ) : (
          archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleArchive={toggleArchive}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ArchivedNotes;
