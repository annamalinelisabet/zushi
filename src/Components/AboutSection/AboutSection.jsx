import { useEffect, useState } from 'react'
import './AboutSection.css'
import Catering from '../../Images/catering.png'
import Event from '../../Images/event.png'
import AW from '../../Images/aw.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutSection = ({ restaurant }) => {
    useEffect(() => {
        AOS.init();
      }, [])

    const [name, setName] = useState('')

    useEffect(() => {
        setName(restaurant.color)   
    }, [restaurant.color])
    

  return (
    <div className='AboutSection'>
        <div className="box-div">
            <div className="box catering" >
                <img src={Catering} alt="Catering" />
                <h3 className='box-text'>Catering</h3>
            </div>
            <div className={`box about ${restaurant.color}`}>
                <div className="text-div">
                    <h2>om oss</h2>
                    <p>Zushi serverar högkvalitativ mat baserad på en unik kombination av traditionell sushi och japas, små delikata japanska rätter gjorda för delning.</p>
                    <button className='btn btn-about'>läs mer
                    </button>
                </div>
            </div>

            {
                name === 'orange' &&
                <div className="box events">
                    <img src={Event} alt="Events" />
                    <h3 className='box-text'>Events</h3>
                </div>
            }
            {
                name === 'red' &&
                <div className="box events">
                    <img src={AW} alt="Events" />
                    <h3 className='box-text'>After work</h3>
                </div>
            }
        </div>
    </div>
  )
}

export default AboutSection