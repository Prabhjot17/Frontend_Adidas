import axios from 'axios'
import UserInterface from '../interfaces/UsersInterface'

class UsersApi {
  static async getAllUsers(): Promise<UserInterface[]> {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users') 
      return response.data
  }
}
export default UsersApi
