import './ResourceDetails.css'
import spirals from '../../images/spirals.png'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkIcon } from '../../utils';
import { fetchPetsById } from '../../api-calls';
import { useEffect, useState } from 'react';

function ResourceDetails({ setError }) {
  const id = useParams().id;
  const [foundResource, setFoundResource] = useState({})

  useEffect(() => {
    fetchPetsById(id)
    .then(data => {
      setFoundResource(data)
      
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
    })
  }, [id, setError])
  
  return Object.values(foundResource).length > 0 && (
    <article key={foundResource.id}>
      <div className='back-to-all-resources-button-container'>
        <Link to={'/'}><button className='back-to-all-resources-button'>Back to All Resources</button></Link>
      </div>
      <section className='details-container'>
        <div className='spirals-container'>
          <img className='spirals' src={spirals} alt='spiral styling'/>
        </div>
        <div className='resource-type'>
          <div className='single-type-image'>{checkIcon(foundResource.type)}</div>
          <h2 className='single-type'>Resource Type: {foundResource.type}</h2>
        </div>
        <div className='resource-info'>
          <h2 className='single-name'>{foundResource.name}</h2>
          <div className='single-details'>
            <p>Details: </p>
            <p>{foundResource.details}</p>
          </div>
          <div className='single-intention'>
            <p>Intention:</p>
            <p>{foundResource.intention}</p>
          </div>
          <div className='single-link'>
            <a href={foundResource.link}>Visit the {foundResource.name} full resource.</a>
          </div>
        </div>
      </section>
    </article>
  ) 
};

export default ResourceDetails;

ResourceDetails.propTypes = {
  allPets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      funFact: PropTypes.string,
      ownersName: PropTypes.string.isRequired
    })
  )
}
