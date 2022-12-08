import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaMapMarkerAlt, FaFacebookSquare } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMail, AiFillInstagram } from 'react-icons/ai'


const Footer = ({ restaurant }) => {
  return (
    <div className='Footer'>
          <div className={`wrapper ${restaurant.color}`}>

            <div className='icons-wrapper'>

                <div className='icon-container'>
                      <div className={`icon-wrapper ${restaurant.color}`}>
                        <FaMapMarkerAlt className={`icon`}/>
                      </div>
                      <div className='address'>
                        <p>{restaurant.address}</p>
                      </div>
                </div>

                <div className='icon-container'>
                    <div className={`icon-wrapper ${restaurant.color}`}>
                      <IoIosCall className={`icon`}/>
                    </div>
                    <div className='address'>
                      <p>{restaurant.phone}</p>
                    </div>
                </div>

                  <div className='icon-container'>
                      <div className={`icon-wrapper ${restaurant.color}`}>
                        <AiOutlineMail className={`icon`}/>
                      </div>
                      <div className='address'>
                        <p>{restaurant.email}</p>
                      </div>
                  </div>
                </div>

            </div>

            <div className='line'></div>

            <div className="text-div">
              <h3>Öppetider</h3>
              <p className={`small-title ${restaurant.color}`}>Lunch:</p>

              {/* <div className='dflex mt1'>
                <p className='text-align-start'>Tisdag - fredag</p>
                <p className='text-align-end'>11:30 - 14.30</p>
              </div> */}
              <div className='dflex text-wrapper mt1'>
                <div className=''>
                  <p className='ml5'>Tisdag - fredag</p>
                </div>
                <div className=''>
                  <p>11.30 - 14.30</p>
                </div>
              </div>

              <p className={`small-title mt1 ${restaurant.color}`}>Middag:</p>

              <div className='dflex text-wrapper mt1'>
                <div>
                  <p>Tisdag - torsdag</p>
                  <p>Fredag</p>
                  <p>Lördag</p>
                  <p>Söndag</p>
                </div>
                <div>
                  <p>14.30 - 21.00</p>
                  <p>14.30 - 22.00</p>
                  <p>12.00 - 22.00</p>
                  <p>15.00 - 20.30</p>
                </div>
              </div>

            </div>

            <div className='line'></div>

            <div className='icons-wrapper-social'>

              <div className='icon-container-social'>
                      <AiFillInstagram className={`icon insta`}/>
              </div>

              <div className='icon-container-social'>
                      <FaFacebookSquare className={`icon fb`}/>
              </div>

            </div>
    </div>
  )
}

export default Footer