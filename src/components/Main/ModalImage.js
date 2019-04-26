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
      <div className='modal-image'>
        <div className='modal-image-active'>
            <img src={active} alt='cloth'/>
        </div>
        <div className='modal-image-thumb'>
            <img src={image1} alt='cloth' 
            onClick={()=> this.setState({active: image1})}/>
            <img src={image2} alt='cloth'
            onClick={()=> this.setState({active: image2})}/>
            <img src={image3} alt='cloth'
            onClick={()=> this.setState({active: image3})}/>
            <img src={image4} alt='cloth'
            onClick={()=> this.setState({active: image4})}/>
        </div>
      </div>
    )
  }
}

export default ModalImage
