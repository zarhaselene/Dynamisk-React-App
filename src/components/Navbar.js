import React from 'react'
import CartIcon from '../images/cart-shopping.svg'
import SearchIcon from '../images/search.svg'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav>
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <div className="navbar-language">EN</div>
              <div className="navbar-search">
                  <input type="text" placeholder="Search..."></input>
                  <img src={SearchIcon} className="search-icon" alt=""></img>
              </div>
            </div>
            <div className="navbar-center">
              <div className="navbar-logo">
              <h1><Link to="/">MEZA</Link></h1>
              </div>
            </div>
            <div className="navbar-right">
              <div className="navbar-menuItem">Home</div>
              <div className="navbar-menuItem"><Link to="/products/">Products</Link></div>

                <div className="navbar-cart">
                  <span>0</span>
                  <Link to="/cart"><img src={CartIcon} alt="" width="20px"/></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}