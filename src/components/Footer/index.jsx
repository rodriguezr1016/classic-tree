import React from 'react'
import './index.css'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
  return (
    <footer>
        <div className='navbar'>
        <nav>
            <ul>
                <li className={location.pathname==='/' ? "active": ''}> <Link to='/'>Home</Link></li>
                <li className={location.pathname==='/about' ? "active": ''}> <Link to='/about'>About Us</Link></li>
                <li className={location.pathname==='/contact' ? "active": ''}> <Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
        <img src="logo-word.png" alt="logo" />

        </div>
        
    </footer>
  )
}

export default Footer