import axios from 'axios'

const api = 'http://localhost:3001'

class Api {
   fetchPosts = () => axios.get(`${api}/posts`)
}

export default new Api()
