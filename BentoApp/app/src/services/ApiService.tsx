import axios from 'axios'

export default class ApiService {

  get = () => {
    axios.get('http://localhost:3000/bento')
      .then(response => {
        // this.setState({data: response.data})
      })
  }

}