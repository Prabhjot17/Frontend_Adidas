import axios from 'axios'
import PostInterface from '../interfaces/PostsInterface'

class PostsApi {
    static async getPostsForUser(userId: string): Promise<PostInterface> {
     
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  
      return response.data
    }

    static async getAllPosts(userId: string): Promise<PostInterface> {
     
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    
        return response.data
      }
}

export default PostsApi