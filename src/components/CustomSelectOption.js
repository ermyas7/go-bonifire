import React, { Component } from 'react'

class CustomSelectOption extends Component {
    state = {
        value: 'Select color'
    }
    handleChange = (evt) => {
      this.setState({value: evt.target.value})
  }  
  render() {
    let {data, type} = this.props;
    let options = data.map((item, index) => {
      return(
        <option value={item} key={index}>{item}</option>
      )
    })
    return (
      <div style={container}>
        <p style={text}>{type}</p>  
        <select value={this.state.value}
         onChange={this.handleChange}
         style={select}>
        <option value="Select color">Select {type}</option>
            {options}
        </select>
      </div>
    )
  }
}

const container = {
  marginRight: '1rem'
}

const select = {
  border: 'solid var(--color-grey-dark-1) 1px',
  background: 'none',
  padding: '.3rem 4rem .3rem .5rem',
  color: 'var(--color-grey-dark-1)'

}

const text = {
  fontSize: '1.5rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  marginBottom: '1rem'
}

export default CustomSelectOption
