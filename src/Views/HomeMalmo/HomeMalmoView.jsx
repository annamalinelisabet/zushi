import React from 'react'
import BookSection from '../../Components/BookSection/BookSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Footer from '../../Components/Footer/Footer'

const HomeMalmoView = () => {

    const malmo = {
    title: 'Drottningtorget',
    address: 'Drottningtorget 1000',
    phone: '070 123 4567',
    color: 'red'
  }

  return (
    <div>
      <BookSection restaurant={malmo} />
      <ReviewSection restaurant={malmo} />
      <OrderSection restaurant={malmo} />
      <AboutSection restaurant={malmo} />
      <Footer restaurant={malmo} />
    </div>
  )
}

export default HomeMalmoView