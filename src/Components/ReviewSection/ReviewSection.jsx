import React from 'react'
import './ReviewSection.css'
import BG from '../../Images/hbg-miljo.jpg'

const ReviewSection = ({ restaurant }) => {
  return (
    <div className={`ReviewSection ${restaurant.color}`}>
        <img src={BG} alt='background'/>
        <h3>Här ska det stå ett citat</h3>
    </div>
  )
}

export default ReviewSection