import { useEffect }from 'react'
import './BookSection.css'
import Sushi from '../../Images/one-plate.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const BookSection = ({restaurant}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='BookSection'>
        <div className="text-div" data-aos="fade-up" data-aos-duration="3000"  data-aos-once="true">
            <h1 className={`header ${restaurant.color}`}>zushi {restaurant.title}</h1>
            <p>På ett enkelt opretentiöst men utsökt, iögonfallande och representativt sätt skapar vi en känsla av lyx, direkt till dig! Var god och fråga om vad du ska välja och vilka drycker som passar bäst med de rätter du har valt.</p>
            <button className={`btn-book ${restaurant.color}`}>
                BOKA BORD
                <div className='horizontal'></div>
                <div className='vertical'></div>
            </button>
        </div>
        <div className="img-div" data-aos="fade-left" data-aos-duration="1000"  data-aos-once="true">
            <img src={Sushi} alt="Sushitallrik" />
        </div>
    </div>
  )
}

export default BookSection