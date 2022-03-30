import "./App.css";
import UsersListsFromAPI from "./components/users";

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
    </div>
  );
}

export default App;
