import axios from 'axios'

export class ApiService {
  getBentoList = () => {
    return axios.get('http://localhost:3000/bento')
  }

}