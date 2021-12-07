import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchRestaurant } from "../../services/yelpService"

const Yelp = () => {
  const [formData, setFormData] = useState({
    query: ''
  })
  const [restaraunt, setRestauraunt] = useState([])
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchRestaurant(formData.query)
      // .then(restaurantData => {
      //   console.log(restaurantData)
      // })
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
      <h3>Restaraunt Search</h3>
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
      <button disabled={isFormInvalid()}>Get Restaurant</button>
      </form>
      
    </div>
  );
}
export default Yelp;