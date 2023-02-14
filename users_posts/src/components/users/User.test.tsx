import {render, screen, waitFor,cleanup} from '@testing-library/react'
import UsersApi from '../../apis/usersApi'
import UserInterface from '../../interfaces/UsersInterface'
import Users from './Users'




// Mock Data
const usersList: UserInterface[] = [ {
  id: 1,
  name: "John",
  email: "john@example.com",
  website: "https://john.com",
},
{
  id: 2,
  name: "Jane",
  email: "jane@example.com",
  website: "https://jane.com",
},]

const userListSpy = jest.spyOn(UsersApi, 'getAllUsers')
userListSpy.mockImplementation(() => {
  return Promise.resolve(usersList)
})

describe('Users Component', () => {

  const renderComponent = () => {
    const {container} = render(
      <Users
        />
    )
    return container
  }
  

  it('has a loader initially', async () => {
    renderComponent()
    expect(screen.getByText("Loading Users...")).toBeInTheDocument();
  })

})
