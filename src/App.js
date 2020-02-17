import React from "react";

import Home from "./components/Home";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
