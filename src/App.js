import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import UserDetail from "./components/users/UserDetail";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [selectedUser, setSelectedUser] = useState({});
  const [repos, setRepos] = useState([]);

  // search github users
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  };

  // get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setSelectedUser(res.data);
    setLoading(false);
  };

  // get user repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  };

  // clear Users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // display an Alert above the searchfield
  const displayAlert = (msg, type) => {
    setAlert({ msg, type });
    console.log("alert should be displayed");

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert}></Alert>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    displayAlert={displayAlert}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users loading={loading} users={users}></Users>
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UserDetail
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  selectedUser={selectedUser}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
