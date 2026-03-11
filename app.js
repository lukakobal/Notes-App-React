import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [input, setInput] = useState("");

  function addNote() {
    if (!input.trim()) return;

    const newNote = {
      id: Date.now(),
      text: input,
    };

    setNotes([...notes, newNote]);
    setInput("");
  }

  function handleDelete(id) {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <div className="app">
      <h1>Notes App</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes">
        {notes.map((note) => (
          <div key={note.id} className="note">
            {note.text}
            <button onClick={() => handleDelete(note.id)}>Delete </button>
          </div>
        ))}
      </div>
    </div>
  );
}
