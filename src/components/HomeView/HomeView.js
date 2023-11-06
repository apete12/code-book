import AllResources from "../AllResources/AllResources";
import Form from '../Forms/Form';
import './HomeView.css'
import PropTypes from 'prop-types'

const HomeView = ({ addNewPet, deletePet, allResources, setLoading, setError }) => {
  return (
    <div className="home-view">
      <Form addNewPet={ addNewPet } setLoading={setLoading} setError={setError}/>
      <AllResources allResources={allResources} deletePet={deletePet}/>
    </div>
  )
}

export default HomeView;

HomeView.propTypes = {
  addNewPet: PropTypes.func.isRequired,
  allResources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      details: PropTypes.string,
      type: PropTypes.number,
      link: PropTypes.string,
    })
  ), 
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func
}