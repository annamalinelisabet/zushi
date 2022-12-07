import React from 'react'
import './OrderSection.css'
import Plates from '../../Images/plates.png'
import Apple from '../../Images/app-store.png'
import Google from '../../Images/google-play.png'

const OrderSection = ({restaurant}) => {
  return (
    <div className='OrderSection'>
        <div className="img-div">
            <img src={Plates} alt="Japas" />
        </div>
        <div className="text-div">
            <h1 className={`header ${restaurant.color}`}>beställ din mat direkt online</h1>
            <p>Avnjut bekvämt vår sushi i ditt egna hem. Låt oss stå för matlagningen, så att du kan spendera mer tid tillsammans med dina nära och kära.</p>
            <div className="button-div">
                <button className={`btn btn-takeaway ${restaurant.color}`}>take away</button>
                <button className={`btn btn-delivery ${restaurant.color}`}>hemkörning</button>
            </div>
            <small>Ladda ner vår ZUSHI APP - beställ, ta del av våra senaste erbjudande och bonusar.</small>
            <div className="badge-div">
              <img src={Apple} alt="App Store" />
              <img src={Google} alt="Google Play" />
            </div>
        </div>
    </div>
  )
}

export default OrderSection