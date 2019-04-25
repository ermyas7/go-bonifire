import React, { Component } from 'react'
import ModalImage from './ModalImage'

export class index extends Component {
  render() {
    return (
     <main className='content'>

        <div className='content-picture'>
            <ModalImage/>
        </div>
        <div className='content-description'>
            something else here
        </div>

     </main>
    )
  }
}

export default index
