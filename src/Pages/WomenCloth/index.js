import React, { Component } from 'react'
import cloth from './cloth.json'
import Main from '../../components/Main'

export class index extends Component {
  render() {
    return (
      <Main data={cloth}/>
    )
  }
}

export default index
