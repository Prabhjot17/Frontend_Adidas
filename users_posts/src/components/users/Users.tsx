import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersApi from "../../apis/usersApi";
import UserInterface from "../../interfaces/UsersInterface";

export interface UserProps {}

const Users: React.FC = (props: UserProps) => {
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

  
  const renderList = users?.map((user) => {
    const { id, name, email, website } = user;
    return (
      <ul id='users-list' className="list-group">
        <Link to={`/posts/${id}`} key={user.id}>
        <li className = "list-group-item "style={{ listStyleType: "none" }}>
          {name} (Email -{email}) (Website-{website})
        </li>
      </Link>
      </ul>
     
    );
  });

  return (
    <>
      {loading ? (
        <div>Loading Users...</div>
      ) : (
        <div>
          <h1>Users</h1>
          <h3>Click on User to see its post</h3>
          {renderList}
        </div>
      )}
    </>
  );
};

export default Users;
