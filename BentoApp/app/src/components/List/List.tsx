import React, { Component } from 'react'
import ApiService from '../../services/ApiService'

// import './List.scss';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        name: 'CLICK IT'
      }]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    // ApiService.get()
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        {/* <p>{this.state.data[0].name}</p> */}
      </div>
    )
  }
}
