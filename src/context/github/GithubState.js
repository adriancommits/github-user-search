// th is is where all the actions go (like "fetch data")
// like initial state and like all the methods like "getuser". cleans up the app file alot

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// create initial state
const GithubState = (props) => {
  const initialState = {
    users: [],
    selectedUser: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // OUR ACTIONS ARE:

  // Search users
  // search github users
  const searchUsers = async (text) => {
    setLoading(); // it doesnt need a bool. bc we toggle in the method i guess

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // this will be dispatched to the reducer<
    // the payload is the data that we want to send. in this case, the response data.
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get user
  // get single Github user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // get repos
  // get user repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // set loading
  // the reducer is gonna catch this. its gonna handle this.
  const setLoading = () => dispatch({ type: SET_LOADING });

  // anything that we want to be available to the rest of the app has to be passed in as "value prop" here. variables but also functions
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {/* where gonna wrap our whole app inside of this provider. therefor we need to do props.children in here */}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

// what happens here?
// we will call an action. it will e.g. make a request to github where we get a response. and then it will dispatch a type back to our reducer
