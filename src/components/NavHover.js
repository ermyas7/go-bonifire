import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavHover extends Component {
  render() {
      let {status} = this.props
    return (
      <div className={status}>
        <ul className="navigation-list">
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                 className='navigation-list-item__link'>
                    Home
                </Link>
            </li>
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                className='navigation-list-item__link'>
                    Men
                </Link>
            </li>
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                className='navigation-list-item__link'>
                    Women
                </Link>
            </li>
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                className='navigation-list-item__link'>
                    LookBook
                </Link>
            </li>
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                className='navigation-list-item__link'>
                    About
                </Link>
            </li>
            <li className='navigation-list-item'>
                <Link to={process.env.PUBLIC_URL}
                className='navigation-list-item__link'>
                    Blog
                </Link>
            </li>
        </ul>
      </div>
    )
  }
}

export default NavHover
