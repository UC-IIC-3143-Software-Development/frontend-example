import React from "react";

import "./App.css";
import UsersListsFromAPI from "./components/usersListsFromAPI";
import ButtonChangeTheme from "./components/buttonChangeTheme";

function App() {
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

      <ButtonChangeTheme />
    </div>
  );
}

export default App;
