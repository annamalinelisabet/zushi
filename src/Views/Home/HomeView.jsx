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
        <li><Link to='/hbg'><div className='link-div'><p>Karlsgatan</p><small>Helsingborg</small></div></Link></li>
        <li><Link to='/malmo'><div className='link-div'><p>Drottningtorget</p><small>Malmö</small></div></Link></li>
        <li><Link to='/ocean'><div className='link-div'><p>Oceanhamnen</p><small>Helsingborg</small></div></Link></li>
      </ul>
    </div>
  )
}

export default HomeView