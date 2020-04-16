import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Search GitHub users</h1>
      <p className="text-center" style={{ color: "gray" }}>
        No matter which word you enter, it's probably somebody's username.
      </p>
      <Search />
      <Users />
    </>
  );
};

export default Home;
