import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_MOCK_SERVICES?.trim() === "true"
) {
  // eslint-disable-next-line global-require
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
