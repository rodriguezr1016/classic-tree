import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className='header'>
      <button className='contact'>
        Call now! <br /> (209)-605-0373 Or (209)874-2904
      </button>
      <Link to='/'>
        <h1 className='bname'>Classic Tree Service</h1>
        </Link>
        <div className='line'></div>
      <ul>
        <li className={location.pathname==='/' ? "active": ''}>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className={location.pathname==='/about' ? "active": ''}>
          <Link to='/about'>
            About Us
          </Link>
        </li>
        <li className={location.pathname==='/contact' ? "active": ''}><Link to="/contact">
          Contact Us
          </Link>
          </li>
      </ul>
        
      

      </div>
    </header>
  )
}

export default Header