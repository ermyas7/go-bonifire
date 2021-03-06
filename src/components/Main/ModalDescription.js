import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Review from '../ReviewStars'
import Select from '../CustomSelectOption'
import QuantitySelection from '../QuantityInput'
import Features from './ModalFeatures'
import Share from '../ShareContent'
import Error from '../Error'
import Success from '../Success';

export class ModalDescription extends Component {
    state = {
        color: '',
        size: '',
        quantity: 1,
        error: '',
        success: ''
      }
      
    setCheckOutDetail = (val) => {
        let {name, value} = val
        this.setState({[name]: value})
        this.setState({success: ''})
        this.setState({error: ''})
    } 

    clearSelection = () => {
        this.setState({
            color: '',
            size: '',
            quantity: 1
        })
        this.setState({error: ''})
    }
    
    addToCart = () => {
        let {color, size, quantity} = this.state
        let name = this.props.data.name
        if(color !=='' && size!=='' && quantity !== 0){
            this.props.addToCart({color, size, quantity, name})
            this.setState({error: ''})
            this.setState({success: 'Item added to cart! go to cart to check'})
            this.clearSelection()
        }
        else{
            this.setState({error: 'Please select all the details!'})
            this.setState({success: ''})
        }
    }
  render() {
      let{data} = this.props
      let {color, size, quantity, error, success} = this.state
      data = {...data, color, size, quantity}

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
        <Success success={success}/>
        <div className='select'>
            <Select type='color' data={data.colors} 
            setCheckOutDetail={this.setCheckOutDetail}
            value={data.color}/>
            <Select type='size'  data={data.sizes}
            setCheckOutDetail={this.setCheckOutDetail}
            value={data.size}/>
            <QuantitySelection 
            setCheckOutDetail={this.setCheckOutDetail}
            value={data.quantity}/>
        </div>
        <Error error={error}/> 
        <p onClick={this.clearSelection} style={clear}>Clear Selection</p>
        <div className='modal-description-add'>
            <div className='modal-description-add-btn btn btn-black'
            onClick={this.addToCart}>
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

const clear = {
    fontWeight: '500',
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'block'
}

export default ModalDescription
