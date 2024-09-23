import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 hover:bg-gray-100 transition duration-300 flex flex-col justify-between h-full">
      <div className="mb-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
        <p className="text-gray-500 mb-4">
          Dibuat: {showFormattedDate(note.createdAt)}
        </p>
        <p className="text-gray-700 mb-4">{note.body}</p>
      </div>

      <div className="flex justify-between items-center mt-auto">
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
