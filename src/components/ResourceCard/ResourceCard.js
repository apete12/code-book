import './ResourceCard.css';
import { Link } from 'react-router-dom';
import { checkIcon } from '../../utils';
import deleteIcon from '../../images/delete.png';
import spirals from '../../images/spirals.png';
import PropTypes from 'prop-types'

const ResourceCard = ({ id, name, type, deleteResource }) => {

  return (
      <div className="resource-card">
        <div className='spiral-container'>
          <img className='spirals' src={spirals} alt='spiral styling'/>
        </div>
        <div className='info-container'>
          <div className='icon-container'>
            <img className='delete-icon' src={deleteIcon} alt='delete icon' onClick={() => deleteResource(id)}/>
          </div>
          <Link to={`/${id}`}>
            {checkIcon(type)}
            <h2 className='card-name'>{name}</h2>
            <p className='card-type'>Type: {type}</p>
          </Link>
        </div>
      </div>
    
  )
}

export default ResourceCard;

ResourceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}