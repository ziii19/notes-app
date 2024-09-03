/** @format */

import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const characterLimit = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length <= characterLimit && title && body) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      addNote(newNote);
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 border-b-2 text-[#333333] border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <p className="text-sm text-gray-500 mb-3">
        Karakter tersisa: {characterLimit - title.length}
      </p>
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 mb-3 border-b-2 text-[#333333] border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Tambah
      </button>
    </form>
  );
}

export default NoteForm;
