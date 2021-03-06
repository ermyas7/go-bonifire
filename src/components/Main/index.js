import React, { Component } from 'react'
import ModalImage from './ModalImage'
import ModalDescription from './ModalDescription'

export class index extends Component {
  render() {
    return (
     <main className='content'>

        <div className='content-picture'>
            <ModalImage/>
        </div>
        <div className='content-description'>
            <ModalDescription data={this.props.data} addToCart={this.props.addToCart}/>
        </div>

     </main>
    )
  }
}

export default index
