import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">Matching Game</header>
      <Cards />
    </div>
  );
}

export default App;
