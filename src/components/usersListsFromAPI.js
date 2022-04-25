import React, { useEffect, useState } from "react";

function UsersListsFromAPI() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1 id="users-heading">Users</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id} data-testid="username-list">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UsersListsFromAPI;
