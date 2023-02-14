import React, {useEffect, useState} from 'react'
import UsersApi from '../../apis/usersApi';
import UserInterface from '../../interfaces/UsersInterface';

export interface UserProps {
}

const Users = (props: UserProps) => {
   
    const [users, setUsers] = useState<UserInterface[]>([]);
   
    const [loading, showLoader] = useState<boolean>(true)
 
  
    useEffect(() => {
      const fetchAllUsers = async () => {
        const response = await UsersApi.getAllUsers()
        setUsers(response)
        showLoader(false)
      }
      fetchAllUsers()
    }, [])
  
    return (
      <>
        {loading
          ? (
            <div>
             Loading Users...
            </div>
          ) : (
            <div>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

    
    
    </div>
          )}
      </>
    )
  }

export default Users