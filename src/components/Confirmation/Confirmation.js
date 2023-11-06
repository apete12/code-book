import './Confirmation.css';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <section className='confirmation'>
        <h2>Resource was added successfully!</h2>
        <Link to='/all-resources'>Explore your updated resource list.</Link>
    </section>
  )
}

export default Confirmation;