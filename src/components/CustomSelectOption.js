import React, { Component } from 'react'

class CustomSelectOption extends Component {

    handleChange = (evt) => {
      let {value} = evt.target
      console.log(this.props)
      if(value !== ''){
        this.props.setCheckOutDetail({
          name: this.props.type,value})
      }
  }  
  render() {
    let {data, type, value} = this.props;
    let options = data.map((item, index) => {
      return(
        <option value={item} key={index}>{item}</option>
      )
    })
    return (
      <div style={container}>
        <p style={text}>{type}</p>  
        <select value={value}
         onChange={this.handleChange}
         style={select}>
        <option value=''>Select {type}</option>
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
