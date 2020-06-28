import React, { useState } from "react";
import "./styles/App.css";
import Cards from "./components/Cards";

function App() {
  const [level, setLevel] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span role="img" aria-label="brain">
            🧠
          </span>{" "}
          Memory
        </div>
        <div className="level">
          Level: <strong>{level}</strong>
        </div>
      </header>
      <Cards level={level} setLevel={setLevel} />
    </div>
  );
}

export default App;
