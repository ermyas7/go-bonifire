import React , {Component} from 'react'
import currency from '../../../assets/images/lang.png'
import NavHover  from '../../NavHover'
import {Link} from 'react-router-dom'
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

        <div className='header-primary-cart'>
        <Link to={`${process.env.PUBLIC_URL}/cart`}>Cart({this.props.cartCount})</Link></div>

      </div>
          <div className='header-secondary'>

            <i className='fa fa-bars bars' 
            onClick={() => this.toggleNav('navigation-active')}
            onMouseOver={() => this.toggleNav('navigation-active')}></i>
            <div className='header-secondary-nav'>
                <ul className='header-secondary-nav__items'>

                  <li className='header-secondary-nav__item'>
                  <Link to={`${process.env.PUBLIC_URL}`} 
                      className='header-secondary-nav__link'>Home</Link>
                  </li>
                  <li className='header-secondary-nav__item'>
                  <Link to={`${process.env.PUBLIC_URL}`}  
                      className='header-secondary-nav__link'>Men</Link>
                      <i className='fa fa-caret-down' 
                      onClick={() => this.toggleNav('navigation-men')}
                      onMouseOver={() => this.toggleNav('navigation-men')}
                      onMouseLeave={() => this.toggleNav('navigation')}></i>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <Link to={`${process.env.PUBLIC_URL}`}  
                      className='header-secondary-nav__link'>Women</Link>
                      <i className='fa fa-caret-down'
                      onClick={() => this.toggleNav('navigation-women')}
                      onMouseOver={() => this.toggleNav('navigation-women')}
        ></i>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <Link to={`${process.env.PUBLIC_URL}`}  className='header-secondary-nav__link'>Lookbook</Link>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <Link to={`${process.env.PUBLIC_URL}`}  className='header-secondary-nav__link'>About</Link>
                  </li>
                  <li className='header-secondary-nav__item'>
                      <Link to={`${process.env.PUBLIC_URL}`}  className='header-secondary-nav__link'>Blog</Link>
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
