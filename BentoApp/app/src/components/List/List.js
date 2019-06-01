import React, { Component } from 'react'
import axios from 'axios'
// import './List.scss';

class List extends Component {
  constructor() {
    super()
    this.state = {
      data: [{
        name: 'CLICK IT'
      }]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:3000/bento')
      .then(response => this.setState({data: response.data}))
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.data[0].name}</p>
      </div>
    )
  }
}

export default List
