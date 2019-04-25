import React from 'react'
import currency from '../../assets/images/lang.png'
const Header = (props) => {
  return (
    <header className='header'>
             <div className='header-primary'>
                <div className='header-primary-currency'>
                    <img src={currency} alt='currency' 
                      className='header-primary-currency__image'/>
                      <p>USD</p>
                      <i className='fa fa-caret-down'></i>
                </div>
                <h1>BONIFIRE</h1>
                <div className='header-primary-cart'>Cart(3)</div>   
            </div>
            <div className='header-secondary'>
              <h1>secondary header</h1>
              <h1>secondary header</h1>
              <h1>secondary header</h1>  
            </div> 
    </header>
  )
}


  export default Header
