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

  // Get user

  // get repos

  // clear users

  // set loading

  // anything that we want to be available to the rest of the app has to be passed in as "value prop" here. variables but also functions
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        repos: state.repos,
        loading: state.loading,
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
