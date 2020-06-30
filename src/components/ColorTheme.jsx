import React from "react";

function ColorTheme() {
  const setColorTheme = (color) => {
    localStorage.setItem("color_theme", color);
  };
  return (
    <div style={{ color: "pink", fontSize: "1.75rem" }}>
      Choose a color theme:
      <p>Pink</p>
      <p onClick={() => setColorTheme("purple")}>Purple</p>
    </div>
  );
}

export default ColorTheme;
