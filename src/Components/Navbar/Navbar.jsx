import './Navbar.css'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import logo from '../../Img/logo.jpg'
import 'animate.css'

const Navbar = () => {

    //show logo on scroll 
    const [logoScroll, setLogoScroll] = useState(false)

    // change bg om nav
    const [color, setColor] = useState(false)
        
    // Show nav-menu on click
    const [showMenu, setShowMenu] = useState(false)

    // Show dropdown-menu on click
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const [showDropdownOrder, setShowDropdownOrder] = useState(false)
    const [flag, setFlag] = useState(false)
    
    const handleClick = () => {
        if(showMenu) {
            setShowMenu(false)
        }
    }

    const changeBg = () => {
        if(window.scrollY >= 1) {
            setColor(true);
            setFlag(true);
        }else {
            setColor(false)
            setFlag(false);
        }
    };

    const showLogoOnScroll = () => {
        if(window.scrollY >= 460) {
            setLogoScroll(true);
        }else {
            setLogoScroll(false)
        }
    };

    window.addEventListener("scroll", changeBg)
    window.addEventListener("scroll", showLogoOnScroll)

    return (
        <div className={`Navbar fixed ${color ? `color` : `transparent`}`}>
            <div className={`navbar-wrapper container`}>
                <div className='right-nav-div'>
                    <div className={`logo-wrapper ${showMenu ? '' : 'show', logoScroll ? 'show' : ''} `} >
                        <Link>
                            <img src={logo} alt="logo" className='logo'/>
                        </Link>
                    </div>
                </div>
            

                <div className='left-nav-div'>
                    <div className={`burger ${showMenu ? `open` : ``}`} onClick={() => setShowMenu(state => !state)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='dmenu-container'>
                        <ul className='d-nav-links dflex'>
                            <li className={`d-link-wrapper ${flag ? `` : `flag`}`}>
                                <Link to="#" className='d-link'>Boka bord</Link>
                            </li>
                            <li className={`d-link-wrapper ${flag ? `` : `flag`}`}>
                                <p className='d-link' onClick={() => setShowDropdownMenu(state => !state)} >Menyer</p>
                                { showDropdownMenu &&
                                    <ul className={`d-dropdown`}>
                                        <li><Link to="#" className='small-link'>Lunch</Link></li>
                                        <li><Link to="#" className='small-link'>Middag</Link></li>
                                        <li><Link to="#" className='small-link'>Dryck</Link></li>
                                    </ul>
                                }
                            </li>
                            <li className={`d-link-wrapper ${flag ? `` : `flag`}`}>
                                <p className='d-link' onClick={() => setShowDropdownOrder(state => !state)}>Beställ</p>
                                { showDropdownOrder &&
                                <ul className={`d-dropdown`}>
                                    <li><Link to="#" className='small-link'>Take Away</Link></li>
                                    <li><Link to="#" className='small-link'>Hemkörning</Link></li>
                                </ul>
                            }   
                            </li>
                            <li className={`d-link-wrapper ${flag ? `` : `flag`}`}>
                                <Link to="#" className='d-link'>Om oss</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- HAMBURGER MENU --- */}

            { showMenu &&
            <div className='menu-container'>
                <div className='ham-links-wrapper'>
                    <ul className='ham-nav-links'>
                        <li>
                            <Link to="#" className='link'>Boka bord</Link>
                        </li>
                        <li>
                            <p className='link link-dd' onClick={() => setShowDropdownMenu(state => !state)} >Menyer</p>
                            { showDropdownMenu &&
                                <ul className={`dropdown`}>
                                    <li><Link to="#" className='small-link'>Lunch</Link></li>
                                    <li><Link to="#" className='small-link'>Middag</Link></li>
                                    <li><Link to="#" className='small-link'>Dryck</Link></li>
                                </ul>
                            }
                        </li>
                        <li>
                            <p to="/" className="link link-dd" onClick={() => setShowDropdownOrder(state => !state)} >Beställ</p>
                            { showDropdownOrder &&
                                <ul className={`dropdown`}>
                                    <li><Link to="#" className='small-link'>Take Away</Link></li>
                                    <li><Link to="#" className='small-link'>Hemkörning</Link></li>
                                </ul>
                            }   
                        </li>
                        <li>
                            <Link to="#" className='link'>Om oss</Link>
                        </li>
                    </ul>
                </div>
            </div>
            }



        </div>
  )
}

export default Navbar