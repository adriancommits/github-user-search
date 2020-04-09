import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // search github users
  searchUsers = async (text) => {
    console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };

  // clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
