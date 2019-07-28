import axios from 'axios'

export class ApiService {
  getBentoList = () => {
    return axios.get('http://localhost:3000/bento')
  }

  getBento = (id: number) => {
    return axios.get(`http://localhost:3000/bento/${id}`)
  }

  getUnits = () => {
    return axios.get(`http://localhost:3000/units`)
  }

  getSeasons = () => {
    return axios.get(`http://localhost:3000/seasons`)
  }

}