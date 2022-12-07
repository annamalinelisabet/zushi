import { Link } from 'react-router-dom'
import Logo from '../../Images/full-logo.png'
import './HomeView.css'

const HomeView = () => {

  return (
    <div className='Start'>
      <div className='img-div'>
        <img src={Logo} alt="Zushi Logo" />
      </div>
      <ul className='nav-links'>
        <li><Link to='/hbg'><div className='link-div hbg'><h1>Karlsgatan</h1><p>Helsingborg</p></div></Link></li>
        <li><Link to='/malmo'><div className='link-div malmo'><h1>Drottningtorget</h1><p>Malmö</p></div></Link></li>
        <li><Link to='/ocean'><div className='link-div ocean'><h1>Oceanhamnen</h1><p>Helsingborg</p></div></Link></li>
      </ul>
    </div>
  )
}

export default HomeView