import './Form.css';
import { useState } from 'react';
import { postResource } from '../../api-calls'
import PropTypes from 'prop-types'

const Form = ({ addNewResource, setLoading, setError }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");


  const submitNewResource = (e) => {
    e.preventDefault();

    const newResource = {
      name,
      details,
      type,
      notes
    };

    if (!newResource.name || !newResource.details || !newResource.type || !newResource.link || !newResource.notes) {
      return alert('Fill all inputs!')
    } else {
    setLoading(true)
    postResource(newResource)

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
    setNotes("")
  }

  return (
    <div className='form-section'>
      <h2 className='new-resource-header'>Add New Resource:</h2>
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
            <label htmlFor='name'>Resource Name:</label>
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
            <label htmlFor='link'>Link:</label>
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
            <label htmlFor='details'>Resource Details:</label>
            <input
              type='text'
              id='details'
              name='details'
              value={details}
              onChange={event => setDetails(event.target.value)}
              required
            />
          </div>
          <div className='resource-description-section sec'>
            <label htmlFor='notes'>Notes:</label>
            <input
              type='text'
              id='notes'
              name='notes'
              value={notes}
              onChange={event => setNotes(event.target.value)}
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
  addNewResource: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
}