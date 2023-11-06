import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchResources } from './api-calls';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import ResourceDetails from './components/ResourceDetails/ResourceDetails';
import Loading from './components/Loading/Loading';
import Form from './components/Forms/Form';
import AllResources from './components/AllResources/AllResources';
import Confirmation from './components/Confirmation/Confirmation';


const App = () => {
  const [allResources, setAllResources] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const location = useLocation().pathname
  
  useEffect(() => {
    setError('')
  }, [location])

  const addNewResource = (newResource) => {
    setAllResources([...allResources, newResource])
  }

  const deleteResource = async (resourceId) => {
    try {
      const response = await fetch(`https://code-book-be-git-main-apete12.vercel.app/api/v1/resources/${resourceId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        const updatedResources = allResources.filter(resource => resource.id !== resourceId);
        setAllResources(updatedResources);
      } else {
        console.log('fail', response.status);
      }
    } catch (error) {
      setError(`Request failed - ${error.message}`)
    }
  };

  useEffect(() => {
    setLoading(true)
    fetchResources()
    .then(data => {
      setAllResources(data.resources)
      setLoading(false)
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      {loading && <Loading loading={loading}/>}
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/all-resources" element={!error && !loading && <AllResources addNewResource={addNewResource} deleteResource={deleteResource} allResources={allResources} setLoading={setLoading} setError={setError}/>}/>
        <Route path="/add-resource" element={!error && !loading && <Form addNewResource={addNewResource} allResources={allResources} setLoading={setLoading} setError={setError}/>}/>
        <Route path="/:id" element={<ResourceDetails allResources={allResources} setError={setError}/>}/>
        <Route path="/confirmation-page" element={<Confirmation/>}/>
        <Route path='*' element={<Error error={error}/>}/>
      </Routes>
      {error && <Error error={error} />}
    </div>
  );
}

export default App;