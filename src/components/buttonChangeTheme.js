import React, { useState } from "react";

function ButtonChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <button role="button" onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

export default ButtonChangeTheme;
