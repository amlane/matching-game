import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
import Cards from "./components/Cards";
import ColorTheme from "./components/ColorTheme";
import DropDownMenu from "./components/DropDownMenu";

function App() {
  const [level, setLevel] = useState(1);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [isThemeChanged, setIsThemeChanged] = useState(false);

  useEffect(() => {
    const colorTheme = localStorage.getItem("color_theme");
    document.documentElement.style.setProperty("--mainColor", colorTheme);
    if (colorTheme === "darkorchid" || colorTheme === "deepskyblue") {
      document.documentElement.style.setProperty("--accentColor", "lightgray");
    } else {
      document.documentElement.style.setProperty("--accentColor", "gray");
    }
    setIsThemeChanged(false);
  }, [isThemeChanged]);

  const toggleDropDownMenu = () => {
    if (isDropDownActive) {
      const dropDownMenu = document.querySelector(".dropdown-menu");

      dropDownMenu.classList.add("disappear");

      setTimeout(() => {
        setIsDropDownActive(!isDropDownActive);
      }, 450);
    } else {
      setIsDropDownActive(!isDropDownActive);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <section className="menu-btn" onClick={() => toggleDropDownMenu()}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </section>
        <section>
          <span className="logo" role="img" aria-label="brain">
            🧠
          </span>
          <h1>Memory</h1>
        </section>

        <div className="level">Level {level}</div>
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
          <ColorTheme
            {...props}
            level={level}
            setLevel={setLevel}
            setIsThemeChanged={setIsThemeChanged}
          />
        )}
      />
    </div>
  );
}

export default App;
