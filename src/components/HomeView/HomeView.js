import './HomeView.css'
import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <div className="home-view">
      <div className='header-styling-container'>
        <h2 className='home-header'>Code Book:</h2>
         <div className='code-book-details'>
          <p className='card-type'>✅ Log your tech resources</p>
          <p className='card-type'>✅ Share your tech resources</p>
          <p className='card-type'>✅ Level up your tech skills</p>
        </div>
        <Link to={`/add-resource`} className='button-home'>
          <h2>Log Your Resources</h2>
        </Link>
      </div>
    </div>
  )
}

export default HomeView;
