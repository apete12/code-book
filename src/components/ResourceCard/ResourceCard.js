import './ResourceCard.css';
import { Link } from 'react-router-dom';
import { checkIcon, checkLinkImage } from '../../utils';
import deleteIcon from '../../images/delete.png';
import spirals from '../../images/spirals.png';
import PropTypes from 'prop-types'

const ResourceCard = ({ id, name, details, type, link, deletePet }) => {

  return (
    <div className="resource-card">
      <div className='spiral-container'>
        <img className='spirals' src={spirals} alt='spiral styling'/>
      </div>
      <div className='info-container'>
        <div className='icon-container'>
          <img className='delete-icon' src={deleteIcon} alt='delete icon' onClick={() => deletePet(id)}/>
        </div>
        {checkIcon(type)}
        <h2>{name}</h2>
        <p className='owner'>Type: {type}</p>
        <Link to={`/${id}`}>More Information</Link>
      </div>
    </div>
  )
}

export default ResourceCard;

ResourceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}