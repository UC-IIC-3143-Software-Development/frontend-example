import React, { useState } from "react";

import "./App.css";
import UsersListsFromAPI from "./components/users";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <div className="App">
      <UsersListsFromAPI />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <button type="button" onClick={toggleTheme}>
        Current theme: {theme}
      </button>
    </div>
  );
}

export default App;
