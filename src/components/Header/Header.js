import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='title-container'>
        <Link to={`/`} className='return-home-link'>
          <img src={logo} alt='code book logo' className='logo'/>
          <h1>Code Book</h1>
        </Link>
      </div>
      <div className='nav-wrapper'>
          <NavLink to={`/all-resources`} className='nav-link'>
            My Resources
          </NavLink>
          <NavLink to={`/add-resource`} className='nav-link'>
            Add New Resource
          </NavLink>
        </div>
    </header>
  )
}

export default Header
