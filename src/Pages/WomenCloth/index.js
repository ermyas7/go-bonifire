import React, { Component } from 'react'
import cloth from './cloth.json'
import Main from '../../components/Main'

export class index extends Component {
  render() {
    return (
      <Main data={cloth} addToCart={this.props.addToCheckOut}/>
    )
  }
}

export default index
