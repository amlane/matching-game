import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
import Cards from "./components/Cards";
import ColorTheme from "./components/ColorTheme";
import DropDownMenu from "./components/DropDownMenu";

function App() {
  const [level, setLevel] = useState(1);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDownMenu = () => {
    if (isDropDownActive) {
      const dropDownMenu = document.querySelector(".dropdown-menu");

      dropDownMenu.classList.add("disappear");

      setTimeout(() => {
        setIsDropDownActive(!isDropDownActive);
      }, 950);
    } else {
      setIsDropDownActive(!isDropDownActive);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span
            className="logo"
            role="img"
            aria-label="brain"
            onClick={() => toggleDropDownMenu()}
          >
            🧠
          </span>
          <h1>Memory</h1>
        </div>
        <div className="level">
          Level: <strong>{level}</strong>
        </div>
        {isDropDownActive ? (
          <DropDownMenu toggleDropDownMenu={toggleDropDownMenu} />
        ) : null}
      </header>
      <Route
        path="/"
        exact
        render={(props) => (
          <Cards {...props} level={level} setLevel={setLevel} />
        )}
      />
      <Route
        path="/settings"
        exact
        render={(props) => (
          <ColorTheme {...props} level={level} setLevel={setLevel} />
        )}
      />
    </div>
  );
}

export default App;
