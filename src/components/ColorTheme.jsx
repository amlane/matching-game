import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/ColorTheme.css";

function ColorTheme(props) {
  const setColorTheme = (color) => {
    localStorage.setItem("color_theme", color);
    props.setIsThemeChanged(true);
  };
  return (
    <div className="color-theme">
      <h2>Select a theme:</h2>
      <section>
        <div
          className="selection default"
          onClick={() => setColorTheme("pink")}
        ></div>
        <div
          className="selection coral"
          onClick={() => setColorTheme("coral")}
        ></div>
        <div
          className="selection yellow"
          onClick={() => setColorTheme("yellow")}
        ></div>
        <div
          className="selection green"
          onClick={() => setColorTheme("chartreuse")}
        ></div>
        <div
          className="selection blue"
          onClick={() => setColorTheme("deepskyblue")}
        ></div>
        <div
          className="selection purple"
          onClick={() => setColorTheme("darkorchid")}
        ></div>
        <button onClick={() => props.history.push("/")}>Save</button>
      </section>
    </div>
  );
}

export default withRouter(ColorTheme);
