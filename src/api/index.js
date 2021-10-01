import axios from 'axios'

const api = 'http://localhost:3001'

class Api {
   fetchPosts = () => axios.get(`${api}/posts`)

   createPost = payload => axios.post(`${api}/posts`, payload)

   updatePost = payload => axios.post(`${api}/posts/update`, payload)

   deletePost = payload => axios.post(`${api}/posts/delete`, payload)
}

export default new Api()
