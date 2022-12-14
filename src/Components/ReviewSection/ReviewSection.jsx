import { useEffect } from 'react'
import './ReviewSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ReviewSection = ({ restaurant }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`ReviewSection ${restaurant.color}`}>
        <img src={` ${restaurant.img}`} alt='background'/>
          <h3 className={`quote`}>{restaurant.quote}</h3>
    </div>
  )
}

export default ReviewSection