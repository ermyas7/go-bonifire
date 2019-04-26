import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Review from '../ReviewStars'
import Select from '../CustomSelectOption'
import QuantitySelection from '../QuantityInput'
import Features from './ModalFeatures'
import Share from '../ShareContent'


export class ModalDescription extends Component {
  render() {
      let{data} = this.props
      console.log(data.colors)
    return (
      <div className='modal-description'>
        <div className='modal-description-back'>
        <Link to={process.env.PUBLIC_URL}>
            <i className='fa fa-angle-left'></i>
            Back To <span>Woman</span>
        </Link>
        </div>

        <h2 className='heading-secondary'>
            {data.name}
        </h2>
        <div className='modal-description-rating'>
            <Review/>
            <p>{data.reviews} Review(s)</p>
            <p>Add a review</p>
        </div>
        <div className='modal-description-price'>
            ${data.price + '.00'}
        </div>

        <div className='modal-description-info'>
            <p>Availability : <span> {data.availability} </span> </p>
            <p>Product Code : <span> {data.productcode} </span> </p>
            <p>Tages : <span> {data.tages} </span> </p>
        </div>

        <div className='modal-description-text'>
            <p>
             {data.description}
            </p>
        </div>
        <Features features={data.features}/>
        <div style={selection}>
            <Select type='color' data={data.colors}/>
            <Select type='size'  data={data.sizes}/>
            <QuantitySelection/>
        </div>
        <p>Clear Selection</p>
        <div className='modal-description-add'>
            <div className='modal-description-add-btn btn btn-black'>
                add to cart
            </div>
            <div className='modal-description-add-btn btn btn-white'>
                <i className='fa fa-heart'></i>
                    Add to whishlist
            </div>    
        </div>
        <div className='modal-description-share'>
           <Share/> 
        </div>

      </div>
    )
  }
}

const selection = {
    display: 'flex',
    justifyContent: 'space-between'
} 

export default ModalDescription
