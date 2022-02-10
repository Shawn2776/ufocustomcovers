import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>

      <div className='sectionOne'>

        <div className='logo'>
          <img src='./logo.png' alt='logo'/>
        </div>
      </div>

      <div className='sectionTwo'>

        <div className='signin'>
          <Link to='signin'>Sign In</Link>
        </div>

        <div className='orders'>
          <Link to='orders'>Orders</Link>
        </div>

        <div className='contact'>
          <Link to='contact'>Contact Us</Link> 
        </div>

        <div className='about'>
          <Link to='about'>About</Link>
        </div>

        <div className='account'>
          <Link to='account'>Your Account</Link>
        </div>

        <div className='cart'>
          <Link to='cart'>Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;