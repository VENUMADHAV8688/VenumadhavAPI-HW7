import React, { useState } from "react";
import "./App.css";

function App() {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch("https://labs.bible.org/api/?passage=random&type=text");
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      console.error("Error fetching the verse:", error);
      setVerse("Failed to fetch verse.");
    }
  };

  return (
    <div className="container">
      <h1>Random Bible Verse</h1>
      <button onClick={fetchRandomVerse}>Get Verse</button>
      {verse && <p className="verse">{verse}</p>}
    </div>
  );
}

export default App;
