import React, { Component } from 'react'

class QuantityInput extends Component {
  state = {
      value: 1
  }
  
  changeHandler = (value) => {
      console.log('from handler')
      console.log(value.target.value)
    this.setState({value})
  }
  render() {
    return (
        <div>
            <p>qty</p>
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
    width: '5rem',
    height: '2rem',
    padding: '.3rem'
}

export default QuantityInput
