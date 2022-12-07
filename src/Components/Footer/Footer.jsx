import React from 'react'
import './Footer.css'
import Icon from '../../Images/logo-icon.png'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'


const Footer = ({ restaurant }) => {
  return (
    <div className='Footer'>
          <div className={`wrapper ${restaurant.color}`}>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <FaMapMarkerAlt className={`icon`}/>
                </div>
                <p>{restaurant.address}</p>
            </div>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <IoIosCall className={`icon`}/>
                </div>
                <p>{restaurant.phone}</p>
            </div>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <AiOutlineMail className={`icon`}/>
                </div>
                <p>{restaurant.email}</p>
            </div>
          </div>

            <div className='line'></div>
            <div className="text-div">
            </div>
    </div>
  )
}

export default Footer