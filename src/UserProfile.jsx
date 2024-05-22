import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function UserProfile() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h4>User Profile</h4>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserProfile;
