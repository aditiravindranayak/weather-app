import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/aditiravindranayak/weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/nayak-aditi/">
          Aditi Nayak
        </a>{" "}
        | Github Link{" "}
        <a target="_blank" href="https://github.com/aditiravindranayak">
          aditiravindranayak
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
