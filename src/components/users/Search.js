import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, clearUsers, searchUsers } = githubContext;
  const { displayAlert } = alertContext;

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      displayAlert(
        "Please enter a username or any word that could possibly appear in a username or bio.",
        "light"
      );
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Enter any word you like.."
          value={text}
          onChange={onChange}
          className="text-center"
          style={{ fontSize: "14px" }}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
          style={{ fontSize: "14px" }}
        >
          Clear results
        </button>
      )}
    </div>
  );
};

export default Search;
