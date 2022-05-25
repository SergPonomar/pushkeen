import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com"
export const axiosClient = axios.create({
  baseURL: API_URL
})

export const UsersApi = {
  getUsers(forced=false) {
    return { 
      url: '/users',
      method: 'get',
      forced: forced
    }
  },
  getUser(id, forced=false) {
    return { 
      url: `/users/${id}`,
      method: 'get',
      forced: forced
    }
  },
  getUserPosts(id, forced=false) {
    return { 
      url: `/users/${id}/posts`,
      method: 'get',
      forced: forced
    }
  },
  getPost(id, forced=false) {
    return { 
      url: `/posts/${id}`,
      method: 'get',
      forced: forced
    }
  },
  getPostComments(id, forced=false) {
    return { 
      url: `/posts/${id}/comments`,
      method: 'get',
      forced: forced
    }
  },
  setNewComment(name, email, body) {
    return {
      url: `/comments`,
      method: 'post',
      data: {
        name,
        email,
        body,
      },
    }
  }
}