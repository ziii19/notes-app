/** @format */

import React from "react";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 hover:bg-gray-100 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-700 mb-4">{note.body}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => toggleArchive(note.id)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          {note.archived ? "Unarsipkan" : "Arsipkan"}
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
