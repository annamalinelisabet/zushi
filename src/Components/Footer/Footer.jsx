import React from 'react'
import './Footer.css'
import Icon from '../../Images/logo-icon.png'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'


const Footer = ({ restaurant }) => {
  return (
    <div className='Footer'>
        <div className="container">
          <div className='wrapper'>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <FaMapMarkerAlt className={`icon`}/>
                </div>
                <p></p>
            </div>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <IoIosCall className={`icon`}/>
                </div>
                <p></p>
            </div>

            <div className='icon-container'>
                <div className={`icon-wrapper ${restaurant.color}`}>
                  <AiOutlineMail className={`icon`}/>
                </div>
                <p></p>
            </div>

          </div>
            <div className="text-div">
            </div>
            <div className='img-div'>
                <img src={Icon} alt="Icon" />
            </div>
        </div>
    </div>
  )
}

export default Footer