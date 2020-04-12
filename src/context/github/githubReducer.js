// a reducer is JUST A FUNCTION
// decides what happens to the state based on an action >
// changes the state of certain components when something happened <

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// a reducer takes in to things. a state and action
// anything that is dispatche dto the reducer has a tpe and an optional payloac. in here we are going to evbaluate the type with a switch function
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        // this also receives payload (the data of the response) and we will save this data in state as "users"
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        selectedUser: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        // state is immutable. we cant just reassign it. we have to make a copy of it and then add any additions or changes to it. we use the spread operator to copy whats in the current state
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
