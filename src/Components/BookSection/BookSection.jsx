import React from 'react'
import './BookSection.css'
import Sushi from '../../Images/one-plate.jpg'

const BookSection = ({restaurant}) => {
  return (
    <div className='BookSection'>
        <div className="text-div">
            <h1 className={`header ${restaurant.color}`}>zushi {restaurant.title}</h1>
            <p>På ett enkelt opretentiöst men utsökt, iögonfallande och representativt sätt skapar vi en känsla av lyx, direkt till dig! Var god och fråga om vad du ska välja och vilka drycker som passar bäst med de rätter du har valt.</p>
            <button className='btn btn-book'>
                BOKA BORD
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </button>
        </div>
        <div className="img-div">
            <img src={Sushi} alt="Sushitallrik" />
        </div>
    </div>
  )
}

export default BookSection