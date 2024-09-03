/** @format */

import React, { useState, useEffect } from "react";
import { initialData } from "./utils";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteFrom";
import SearchBar from "./components/SearchBar";
import ArchivedNotes from "./components/ArchivedNote";

function App() {
  const [notes, setNotes] = useState(initialData);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div
        className={`${
          scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
        } fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}>
        <div className="flex justify-center items-center h-[60px]">
          <h1 className="text-2xl font-bold text-white transition-transform duration-300 transform-gpu hover:scale-105">
            Notes App
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-8 pt-24">
        {" "}
        {/* Added pt-24 to account for fixed header */}
        <SearchBar query={query} setQuery={setQuery} />
        <NoteForm addNote={addNote} />
        <NoteList
          notes={notes}
          query={query}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
        <ArchivedNotes
          notes={notes}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      </div>
    </div>
  );
}

export default App;
