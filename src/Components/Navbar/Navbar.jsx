import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../Img/logo.jpg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='navbar-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} alt="logo" className='logo'/>
            </div>

        <div className='nav-link-wrapper'>
            <ul className='nav-links'>
                <li className='link-wrapper'>
                    <NavLink to="/" className="link">Boka bord</NavLink>
                </li>
                <li className='link-wrapper'>
                    <NavLink to="/" className="link">Menyer</NavLink>
                </li>
                <li className='link-wrapper'>
                    <NavLink to="/" className="link">Beställ</NavLink>   
                </li>
                <li className='link-wrapper'>
                    <NavLink to="/" className="link">Om oss</NavLink>
                </li>
            </ul>
        </div>


        </div>
    </div>
  )
}

export default Navbar