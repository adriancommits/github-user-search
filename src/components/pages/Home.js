import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Browse Github users</h1>
      <p className="text-center" style={{ color: "gray" }}>
        Or search for any word you can imagine. Somebody probably thought <br />
        <em>"oh, wouldn't that be an amazing username?" </em>
      </p>
      <Search />
      <Users />
    </>
  );
};

export default Home;
