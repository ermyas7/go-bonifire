import React, { Component } from 'react'
import image1 from '../../assets/images/women_black.jpg'
import image2 from '../../assets/images/women_white.jpeg'
import image3 from '../../assets/images/women_pink.jpg'
import image4 from '../../assets/images/women_red.jpg'

export class ModalImage extends Component {
  state = {
      active: image1
  }  
  render() {
      let {active} = this.state
    return (
      <div class='modal-image'>
        <div class='modal-image-active'>
            <img src={active} alt='cloth'/>
        </div>
        <div class='modal-image-thumb'>
            <img src={image1} alt='cloth' style={activeImage}/>
            <img src={image2} alt='cloth'/>
            <img src={image3} alt='cloth'/>
            <img src={image4} alt='cloth'/>
        </div>
      </div>
    )
  }
}

const activeImage = {
    border: 'solid var(--color-golden) 2px'
}

export default ModalImage
