import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const url = "https://jsonplaceholder.typicode.com/photos";
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
        <img key={user.id} src={user.thumbnailUrl} alt={user.title} />
      ))}
    </ul>
  );
}

export default UserList;
