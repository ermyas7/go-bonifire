import React, { Component } from 'react'

class QuantityInput extends Component {

  changeHandler = (value) => {
    this.props.setCheckOutDetail({
      name: 'quantity',
      value:value.target.value})
  }
  render() {
    let {value} = this.props
    return (
        <div className='select-item'>
            <p className='select-item-text'>qty</p>
            <input type='number'
             name="quantity" min="1"
             value={value}
             onInput={this.changeHandler}
             onChange={this.changeHandler}
             className='select-item-input quantity'/>
        </div>
    )
  }
}

export default QuantityInput
