import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersApi from "../../apis/usersApi";
import UserInterface from "../../interfaces/UsersInterface";

export interface UserProps {}

const Users = (props: UserProps) => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const [loading, showLoader] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await UsersApi.getAllUsers();
      setUsers(response);
      showLoader(false);
    };
    fetchAllUsers();
  }, []);
  const renderList = users.map((user) => {
    const { id, name, email, website } = user;
    return (
      <Link to={`/posts/${id}`}>
        <li key={user.id}>
          {name} (Email -{email}) (Website-{website})
        </li>
      </Link>
    );
  });

  return (
    <>
      {loading ? (
        <div>Loading Users...</div>
      ) : (
        <div>
          <h1>Users</h1>
          {renderList}
        </div>
      )}
    </>
  );
};

export default Users;
