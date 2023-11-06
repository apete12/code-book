import './Form.css';
import { useState } from 'react';
import { postPet } from '../../api-calls'
import PropTypes from 'prop-types'

const Form = ({ addNewResource, setLoading, setError }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [intention, setIntention] = useState("");


  const submitNewResource = (e) => {
    e.preventDefault();

    const newResource = {
      name,
      details,
      type,
      intention
    };

    if (!newResource.name || !newResource.details || !newResource.type || !newResource.link || !newResource.intention) {
      return alert('Fill all inputs!')
    } else {
    setLoading(true)
    postPet(newResource)

    .then(data => {
      setLoading(false)

      addNewResource(data)
      clearInputs()
    })
    .catch(error => setError(`Post Failed - ${error.message}`))
    setLoading(false)
    }
  };

  const clearInputs = () => {
    setName("");
    setDetails("");
    setType("");
  }

  return (
    <div className='form-section'>
      <p className='new-resource'>Add New Resource:</p>
      <div className='form-wrapper'>
        <form>
        <div className='resource-type-checkbox sec' id='resource-type-checkbox'>
            <input
              type='checkbox'
              checked={type === 'Video'}
              onChange={() => setType('Video')}
              value='video'
              id='video'
              name='video'
            />
            <label id='video-label' htmlFor='Video'>Video</label>
            <input
              type='checkbox'
              checked={type === 'Article'}
              onChange={() => setType('Article')}
              value='article'
              id='article'
              name='article'
            />
            <label htmlFor='article'>Article</label>
          </div>
          <div className='resource-name-section sec'>
            <label htmlFor='pets-name'>Resource Name:</label>
            <input
              type='text'
              id='resource-name'
              name='resourceName'
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </div>
          <div className='resource-description-section sec'>
            <label htmlFor='pets-nickname'>Link:</label>
            <input
              type='text'
              id='link'
              name='link'
              value={link}
              onChange={event => setLink(event.target.value)}
              required
            />
          </div>
          <div className='resource-description-section sec'>
            <label htmlFor='pets-nickname'>Resource Details:</label>
            <input
              type='text'
              id='pets-nickname'
              name='petsNickname'
              value={details}
              onChange={event => setDetails(event.target.value)}
              required
            />
          </div>
          <div className='resource-description-section sec'>
            <label htmlFor='pets-nickname'>Intention:</label>
            <input
              type='text'
              id='pets-nickname'
              name='petsNickname'
              value={intention}
              onChange={event => setIntention(event.target.value)}
              required
            />
          </div>
          
          <button className='button' onClick={event => submitNewResource(event)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

Form.propTypes = {
  addNewPet: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}