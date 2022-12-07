import React from 'react'
import './ReviewSection.css'
import BG from '../../Images/hbg-miljo.jpg'

const ReviewSection = ({ restaurant }) => {
  return (
    <div className={`ReviewSection ${restaurant.color}`}>
        <img src={` ${restaurant.img}`} alt='background'/>
        <h3 className={`quote`}>{restaurant.quote}</h3>
    </div>
  )
}

export default ReviewSection