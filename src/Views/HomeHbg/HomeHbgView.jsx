import AboutSection from '../../Components/AboutSection/AboutSection'
import BookSection from '../../Components/BookSection/BookSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'

const HomeHbgView = () => {
  
  const hbg = {
    title: 'karlsgatan',
    address: 'Karlsgatan 1000',
    phone: '070 123 4567',
    color: 'orange'
  }
  
  return (
    <div>
      <BookSection restaurant={hbg} />
      <ReviewSection restaurant={hbg} />
      <OrderSection restaurant={hbg} />
      <AboutSection restaurant={hbg} />
    </div>
  )
}

export default HomeHbgView