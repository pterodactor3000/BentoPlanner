import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { ApiService } from '../../services/ApiService'

// import './List.scss';

@inject('BentoStore')

@observer
export default class List extends Component<{ BentoStore?: any; }> {
  apiService: ApiService = new ApiService()

  handleClick = (e: any) => {
    e.preventDefault();
    this.apiService.getBentoList().then((response) => {
      this.props.BentoStore.setBentoList(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const { BentoStore } = this.props

    return (
      <div className='button__container'>
        
        {BentoStore.count}

        {BentoStore.list.map( (item: any, i: number) => <p key={i}> {item.name} </p> )}

        <form>
          <button className='button' onClick={(e) => this.handleClick(e)}>Click Me</button>
        </form>
      </div>
    )
  }
}
