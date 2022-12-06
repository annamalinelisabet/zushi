import React from 'react'
import './Hero.css'
import logo from '../../Img/logo.jpg'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='img'>
            <div className='logo-wrapper'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Hero