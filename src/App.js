import "./App.css";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [show, setShow] = useState(false);

  const imFunction = () => {
    setWord("היי עדי תודה שלחצת עליי");
    setShow(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!show && (
          <button onClick={imFunction}>
            תלחצי עליי, סמכי עליי זה חשוב ללחוץ ממש ממש חשוב
          </button>
        )}
        {show && word}
      </header>
    </div>
  );
}

export default App;
