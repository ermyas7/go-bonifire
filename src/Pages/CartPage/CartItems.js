import React from 'react'
import image from '../../assets/images/women_pink.jpg'

const CartItems = () => {
  return (
    <div>
      <div className='cart'>
        <div className='cart-item'>
            <img src={image} alt='product'/>
        </div>
        <div className='cart-item'>
            <h2 className='cart-item-heading'>nice cloth</h2>
            <p>color : black</p>
            <p>size : 22</p>
            <p>quantity : 1</p>
        </div>
      </div>
    </div>
  )
}

export default CartItems