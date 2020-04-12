import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserDetail from "./components/users/UserDetail";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={UserDetail} />} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
