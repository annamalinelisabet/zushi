import React from 'react'
import './Popup.css'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTag, BsPerson } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { FaRegCalendarAlt ,FaRegCalendarCheck } from 'react-icons/fa'

const Popup = ({handleClose}) => {
  return (
    <div className='Popup'>
      <div className='popup-bg'>
        <div className='popup-wrapper'>

          <div className='form-header dflex mb-1'>
            <h1>Zushi</h1>
            <button className='btn close-popup-btn' onClick={handleClose}>
              <AiOutlineClose className='btn-pop' />
            </button>
          </div>

          <div className='icons-wrapper dflex mb-max'>
            <div className='center'>
              <BsTag />
              <p>Typ</p>
            </div>

            <div className='center light'>
              <BsPerson />
              <p>Gäster</p>
            </div>

            <div className='center light'>
              <FaRegCalendarAlt />
              <p>Datum</p>
            </div>

            <div className='center light'>
              <BiTimeFive />
              <p>Tid</p>
            </div>

            <div className='center light'>
              <FaRegCalendarCheck />
              <p>Bekräfta</p>
            </div>

          </div>

          <form className='form'>
            <h1>Välj typ</h1>
            <input type="text" placeholder='Lunch'/>
            <input type="text" placeholder='Middag'/>
            <p>Avbeställ en reservation</p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Popup