import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
