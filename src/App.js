import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
