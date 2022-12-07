import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import BookSection from '../../Components/BookSection/BookSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import Footer from '../../Components/Footer/Footer'

const HomeOcean = () => {

    const ocean = {
    title: 'Oceanhamnen',
    address: 'Oceanhamnen 1000',
    phone: '070 123 4567',
    color: 'pink',
    img: 'https://www.enterprisemagazine.se/upl/images/857205.jpg?t=1667920113370',
    quote: 'Super trevligt ställe med god mat och trevlig miljö och service'
    
  }

  return (
    <div>
      <Navbar restaurant={ocean} />
      <Hero />
      <BookSection restaurant={ocean}/>
      <ReviewSection restaurant={ocean}/>
      <OrderSection restaurant={ocean}/>
      <Footer restaurant={ocean}/>
    </div>
  )
}

export default HomeOcean