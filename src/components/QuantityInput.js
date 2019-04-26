import React, { Component } from 'react'

class QuantityInput extends Component {
  state = {
      value: 1
  }
  
  changeHandler = (value) => {
      console.log('from handler')
      console.log(value.target.value)
    this.setState({value: value.target.value})
  }
  render() {
    return (
        <div>
            <p style={text}>qty</p>
            <input type='number'
             name="quantity" min="1"
             value={this.state.value}
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
