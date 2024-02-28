import React from "react";
import Users from "./Users";
import UserContext from "../context/UserContext";
import { useState } from "react";

const UsersDashboard = () => {
  const [user, setUser] = useState("Harshita");

  //   const userName = "Harshita";
  const users = {
    userName: user,
    updateName: setUser,
  };

  return (
    <UserContext.Provider value={users}>
      <h1>Usersdashboard</h1>
      {/* <button onClick={() => setUser("Harshita Mahapatra")}>update name</button> */}
      <Users />
    </UserContext.Provider>
  );
};

export default UsersDashboard;
