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
        <div>
            <p style={text}>qty</p>
            <input type='number'
             name="quantity" min="1"
             value={value}
             onInput={this.changeHandler}
             onChange={this.changeHandler}
                style={quantity}/>
        </div>
    )
  }
}

const quantity = {
    fontSize: '1.5rem',
    padding: '.3rem',
}

const text = {
    fontSize: '1.5rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: '1rem'
}
export default QuantityInput
