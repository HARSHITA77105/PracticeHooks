import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
const Details = () => {
  const { updateName } = useContext(UserContext);

  return (
    <>
      <h1>Details</h1>
      <button onClick={() => updateName("yyyyyy")}>Update Name</button>
    </>
  );
};

export default Details;
