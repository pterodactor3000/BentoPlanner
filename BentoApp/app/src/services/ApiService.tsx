import axios from 'axios'

export class ApiService {
  getBentoList = () => {
    return axios.get('http://localhost:3000/bento')
  }

  getBento = (id: number) => {
    return axios.get(`http://localhost:3000/bento/${id}`)
  }

}