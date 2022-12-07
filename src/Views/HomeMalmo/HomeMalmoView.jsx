import React from 'react'
import BookSection from '../../Components/BookSection/BookSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'

const HomeMalmoView = () => {

    const malmo = {
    title: 'Drottningtorget',
    address: 'Drottningtorget 1000',
    phone: '070 123 4567',
    color: 'red',
    img: 'https://gastrogate.com/files/32542/sccyn4cv.jpeg',
    quote: 'Så underbart, som vanligt! Exeptionella råvaror, helt klart Malmös bästa Sushi!'
  }

  return (
    <div>
      <Navbar restaurant={malmo}/>
      <Hero/>
      <BookSection restaurant={malmo} />
      <ReviewSection restaurant={malmo} />
      <OrderSection restaurant={malmo} />
      <AboutSection restaurant={malmo} />
      <Footer restaurant={malmo} />
    </div>
  )
}

export default HomeMalmoView