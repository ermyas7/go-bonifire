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
      <div className='select-item'>
        <p className='select-item-text'>{type}</p>  
        <select value={value}
         onChange={this.handleChange}
         className='select-item-input'>
        <option value=''>Select {type}</option>
            {options}
        </select>
      </div>
    )
  }
}


export default CustomSelectOption
