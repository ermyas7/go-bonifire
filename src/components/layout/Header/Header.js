import React , {Component} from 'react'
import currency from '../../../assets/images/lang.png'
import NavHover  from '../../NavHover'

class Header extends Component{
  state = {
    status: 'navigation'
  }

  toggleNav = (value) => {
    if(this.state.status === 'navigation'){
      this.setState({status: value})
    }
    else{
      this.setState({status: 'navigation'})
    }
    
  }
  render(){
    return (
      <header className='header'>
        <div className='header-primary'>

        <div className='header-primary-currency'>
            <img src={currency} alt='currency' 
            className='header-primary-currency__image'/>
            <p className='header-primary-currency__type'>USD</p>
            <i className='fa fa-caret-down'></i>
        </div>

        <h1 className='heading-primary'>BONIFIRE</h1>

        <div className='header-primary-cart'>Cart(3)</div>

      </div>
          <div className='header-secondary'>

            <i className='fa fa-bars bars' 
            onClick={() => this.toggleNav('navigation-active')}
            onMouseOver={() => this.toggleNav('navigation-active')}></i>
            <div className='header-secondary-nav'>
                <ul className='header-secondary-nav__items'>

                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>Home</a>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>Men</a>
                      <i className='fa fa-caret-down' 
                      onClick={() => this.toggleNav('navigation-men')}
                      onMouseOver={() => this.toggleNav('navigation-men')}></i>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>Women</a>
                      <i className='fa fa-caret-down'
                      onClick={() => this.toggleNav('navigation-women')}
                      onMouseOver={() => this.toggleNav('navigation-women')}></i>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>Lookbook</a>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>About</a>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <a href='#' className='header-secondary-nav__link'>Blog</a>
                  </li>
                </ul>

              </div>

                <div className='header-secondary-left'>
                  <span className='fa fa-heart'></span>
                  <span className='fa fa-search'></span>
                </div>

              </div>
              <NavHover status={this.state.status}/> 
      </header>
    )
  }  
}


  export default Header
