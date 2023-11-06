import './AllResources.css'
import ResourceCard from "../ResourceCard/ResourceCard";
import PropTypes from 'prop-types'

const AllResources = ({ allResources, deleteResource }) => {

  const resources = allResources.map((resource) => {
    return <ResourceCard 
      key={resource.id}
      id={resource.id}
      name={resource.name}
      details={resource.details}
      type={resource.type}
      link={resource.link}
      deleteResource={deleteResource}
      />
  })

  return (
    <div className="all-resources-page">
      <h2 className='all-resources-header'>All Resources: </h2>
      <div className="all-resources-container">
        {resources}
      </div>
    </div>
  )
}

export default AllResources;

AllResources.propTypes = {
  allResources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string,
      details: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      link: PropTypes.string,
      type: PropTypes.string.isRequired
    })
  )
}