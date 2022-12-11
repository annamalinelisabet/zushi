import './Navbar.css'
import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../Img/logo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = ({ restaurant }) => {
    useEffect(() => {
        AOS.init();
      }, [])

    const navRef = useRef()

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
        if(window.scrollY >= 460  ) {
            navRef.current.classList.add("show")
        }else {
            navRef.current.classList.remove("show")
        }
        if(showMenu){
            navRef.current.classList.remove("show")
        }
        
    };

    window.addEventListener("scroll", changeBg)
    window.addEventListener("scroll", showLogoOnScroll)

    return (
        <div className={`Navbar fixed ${color ? `color` : `transparent`}`}>
            <div className={`navbar-wrapper container`}>
                <div className='right-nav-div'>
                    
                    <div ref={navRef} className={`logo-wrapper`} >
                        <Link>
                            <img src={logo} alt="logo" className='logo'/>
                        </Link>
                    </div>

                </div>
            

                <div className='left-nav-div'>
                    <div className='burger-container'>
                        <div className={`burger  ${showMenu ? `open` : ``}`} onClick={() => setShowMenu(state => !state)}>
                            <span className={` ${restaurant.color}`}></span>
                            <span className={` ${restaurant.color}`}></span>
                            <span className={` ${restaurant.color}`}></span>
                        </div>
                    </div>

                    <div className='dmenu-container'>
                        <ul className='d-nav-links dflex'>
                            <li className={`d-link-wrapper ${restaurant.color} ${flag ? `` : `flag`}`}>
                                <Link to="#" className={`d-link ${restaurant.color}`}>Boka bord</Link>
                            </li>
                            <li className={`d-link-wrapper a1 ${restaurant.color} ${flag ? `` : `flag`}`}>
                                <p className={`d-link hd-link ${restaurant.color}`}>Menyer</p>
                                 <div className='dropdown-wrapper'>
                                    <ul className={`d-dropdown ${restaurant.color}`}>
                                        <li><Link to="#" className={`small-link ${restaurant.color}`}>Lunch</Link></li>
                                        <li><Link to="#" className={`small-link ${restaurant.color}`}>Middag</Link></li>
                                        <li><Link to="#" className={`small-link ${restaurant.color}`}>Dryck</Link></li>
                                    </ul>
                                 </div>
                            </li>
                            <li className={`d-link-wrapper a2 ${restaurant.color}  ${flag ? `` : `flag`}`}>
                                <p className={`d-link hd-link ${restaurant.color}`}>Beställ</p>
                                <div className='dropdown-wrapper'>
                                    <ul className={`d-dropdown ${restaurant.color}`}>
                                        <li><Link to="#" className={`small-link ${restaurant.color}`}>Take<span className='ml1'></span>Away</Link></li>
                                        <li><Link to="#" className={`small-link ${restaurant.color}`}>Hemkörning</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className={`d-link-wrapper a3 ${restaurant.color} ${flag ? `` : `flag`}`}>
                                <Link to="#" className={`d-link ${restaurant.color}`}>Om oss</Link>
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
                            <Link to="#" className={`link ${restaurant.color}`} >Boka bord</Link>
                        </li>
                        <li>
                            <p className={`link link-dd ${restaurant.color}`} onClick={() => setShowDropdownMenu(state => !state)}>Menyer</p>
                            { showDropdownMenu &&
                                <ul className={`dropdown`}>
                                    <li><Link to="#" className={`small-link ${restaurant.color}`}>Lunch</Link></li>
                                    <li><Link to="#" className={`small-link ${restaurant.color}`}>Middag</Link></li>
                                    <li><Link to="#" className={`small-link ${restaurant.color}`}>Dryck</Link></li>
                                </ul>
                            }
                        </li>
                        <li>
                            <p to="/" className={`link link-dd ${restaurant.color}`} onClick={() => setShowDropdownOrder(state => !state)} >Beställ</p>
                            { showDropdownOrder &&
                                <ul className={`dropdown`}>
                                    <li><Link to="#" className={`small-link ${restaurant.color}`}>Take Away</Link></li>
                                    <li><Link to="#" className={`small-link ${restaurant.color}`}>Hemkörning</Link></li>
                                </ul>
                            }   
                        </li>
                        <li>
                            <Link to="#" className={`link  ${restaurant.color}`} >Om oss</Link>
                        </li>
                    </ul>
                </div>
            </div>
            }



        </div>
  )
}

export default Navbar