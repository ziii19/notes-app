import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, query, deleteNote, toggleArchive }) {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) && !note.archived
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filteredNotes.length === 0 ? (
        <p className="col-span-full text-center text-xl">Tidak ada catatan</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleArchive={toggleArchive}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
