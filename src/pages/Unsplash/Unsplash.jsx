import React, { useState } from 'react';
import { getPhotos, getRandomPhoto } from '../../services/unsplashService';
import axios from 'axios'



const Unsplash = () => {
  const [formData, setFormData] = useState({
    query: ''
  })
  const [randomPhoto, setRandomPhoto] = useState([])


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      getPhotos(formData.query)
      .then(photoData => {
        console.log(photoData)
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleRandom = evt => {
    try {
      getRandomPhoto()
      .then(photo => {
        console.log(photo)
      })
    } catch (err) {
      console.log(err)
    }
    
  }


  const { query } = formData

  const isFormInvalid = () => {
    return !(query)
  }

  return ( 
    <div>
      <h3>Unsplash Search</h3>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      > 
      <p> search-query</p>
      <input
        type="text"
        value={query}
        name="query"
        onChange={handleChange}
      />
      <button disabled={isFormInvalid()}>Get Photos</button>
      </form>
      <button onClick={handleRandom}>get random</button>
    </div>
  );
}

export default Unsplash;