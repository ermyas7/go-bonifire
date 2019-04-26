import React, { Component } from 'react'
import CartItems from './CartItems'

class index extends Component {  
  render() {
      let {items} = this.props;
      console.log(items)
      let cartRendered = items.map((item, index) => {
          return(
            <CartItems item={item}/>
          )
      })
      console.log(items)
      if(items.length === 0){
          return(
              <h1 style={heading}>No Item Added in the cart</h1>
          )
      }
    return (
      <div>
          {cartRendered}
      </div>
    )
  }
}

const heading = {
    fontSize: '3rem',
    textAlign: 'center',
    marginTop: '2rem'
}

export default index
