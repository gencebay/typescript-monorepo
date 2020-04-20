import { hot } from "react-hot-loader";
import React from "react";
import { MyCustomButton, BigAppText } from "@gencebay/react-ui";
import logo from "./logo.svg";
import "./App.css";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.tsx </code>
          and save to reload
        </p>
        <div className="content">
          <MyCustomButton style={{ height: 40, width: 80 }}>
            <BigAppText>Click Me</BigAppText>
          </MyCustomButton>
        </div>
      </header>
    </div>
  );
}

export default hot(module)(App);
