import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Review from '../ReviewStars'
import Select from '../CustomSelectOption'
import QuantitySelection from '../QuantityInput'

import Share from '../ShareContent'


export class ModalDescription extends Component {
  render() {
    return (
      <div className='modal-description'>
        <div className='modal-description-back'>
        <Link to={process.env.PUBLIC_URL}>
            <i className='fa fa-angle-left'></i>
            Back To <span>Woman</span>
        </Link>
        </div>

        <h2 className='heading-secondary'>
            The Atelier Tailored Coat
        </h2>
        <div className='modal-description-rating'>
            <Review/>
            <p>3 Review(s)</p>
            <p>Add a review</p>
        </div>
        <div className='modal-description-price'>
            $499.00
        </div>

        <div className='modal-description-info'>
            <p>Availability : <span> In stock </span> </p>
            <p>Product Code : <span> #4657 </span> </p>
            <p>Tages : <span> Fashion, Hood, Classic </span> </p>
        </div>

        <div className='modal-description-text'>
            <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className='modal-description-feature'>
            <ul>
                <li>Dark Blue</li>
                <li>Regular fit</li>
                <li>100% Cotton</li>
                <li>Free Shipping with 4 day delivery</li>
            </ul>
        </div>

        <div className='modal-description-selection'>
            <Select/>
            <Select/>
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

export default ModalDescription
