import React from 'react'
import BookSection from '../../Components/BookSection/BookSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'
import OrderSection from '../../Components/OrderSection/OrderSection'

const HomeOcean = () => {

    const ocean = {
    title: 'Oceanhamnen',
    address: 'Oceanhamnen 1000',
    phone: '070 123 4567',
    color: 'pink'
  }

  return (
    <div>
      <BookSection restaurant={ocean}/>
      <ReviewSection restaurant={ocean}/>
      <OrderSection restaurant={ocean}/>
    </div>
  )
}

export default HomeOcean