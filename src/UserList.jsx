import React, { useState, useEffect, useReducer, useContext } from "react";
import { AuthContext } from "./AuthContext";

function UserList() {
  const { isLoggedIn } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          document.title = `Users (${data.length})`;
          setIsLoading(false);
        });
    } catch (e) {
      setError(e);
    }
    return () => {};
  }, []);

  // Show on the UI if there is an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Show on the UI if data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
