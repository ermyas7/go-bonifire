import React from 'react'
import image from '../../assets/images/women_black.jpg'

const CartItems = ({item}) => {
  return (
    <div>
      <div className='cart'>
        <div className='cart-item'>
            <img src={image} alt='product'/>
        </div>
        <div className='cart-item'>
            <h2 className='cart-item-heading'>{item.name}</h2>
            <p>color : {item.color}</p>
            <p>size : {item.size}</p>
            <p>quantity : {item.quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItems