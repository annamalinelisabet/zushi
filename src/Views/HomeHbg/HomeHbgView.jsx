import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import AboutSection from '../../Components/AboutSection/AboutSection'
import BookSection from '../../Components/BookSection/BookSection'
import Footer from '../../Components/Footer/Footer'
import OrderSection from '../../Components/OrderSection/OrderSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'

const HomeHbgView = () => {
  
  const hbg = {
    title: 'karlsgatan',
    address: 'Karlsgatan 1A252 24 Helsingborg',
    phone: '042 449 90 89',
    email: 'hbg@zushi.se',
    color: 'orange',
    img: 'https://gastrogate.com/files/32517/dsc02658hemsida.jpg',
    quote: 'Maten var fantastisk precis som servicen. Finns verkligen inget att klaga på! Rekommenderar starkt.',
    link : 'https://www.google.com/maps/dir//Zushi+Helsingborg,+Karlsgatan+1A,+252+24/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4652324a85f02c11:0x89715c1925f419ff?sa=X&ved=2ahUKEwj7jZKKxOn7AhWrXfEDHQWSAA8Q9Rd6BAhWEAQ'
  }
  
  return (
    <div>
      <Navbar restaurant={hbg} />
      <Hero  restaurant={hbg}/>
      <BookSection restaurant={hbg} />
      <ReviewSection restaurant={hbg} />
      <OrderSection restaurant={hbg} />
      <AboutSection restaurant={hbg} />
      <Footer restaurant={hbg} />
    </div>
  )
}

export default HomeHbgView