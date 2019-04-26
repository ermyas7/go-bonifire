import React, { Component } from 'react'

export class CustomSelectOption extends Component {
    state = {
        value: 'Select color'
    }
    handleChange = (text) => {

  }  
  render() {
    return (
      <div>
        <p>Color</p>  
        <select value={this.state.value}
         onChange={this.handleChange}
         style={select}>
        <option value="Select color">Select Color</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
      </div>
    )
  }
}

const select = {
  border: 'solid var(--color-grey-dark-1) 1px',
  background: 'none',
  padding: '.2rem .5rem',
  color: 'var(--color-grey-dark-1)'

}

export default CustomSelectOption
