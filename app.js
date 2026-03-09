import { useState } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);

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
          </div>
        ))}
      </div>
    </div>
  );
}
