import React from "react";
import { useContext } from "react";
import Details from "./Details";
import UserContext from "../context/UserContext";
const Users = () => {
  const data = useContext(UserContext);

  console.log(data);
  return (
    <>
      <h1>Users:{data.userName}</h1>
      <Details />
    </>
  );
};

export default Users;
