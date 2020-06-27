import React from "react";
import "./styles/App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span role="img" aria-label="brain">
            🧠
          </span>{" "}
          Memory
        </div>
      </header>
      <Cards />
    </div>
  );
}

export default App;
