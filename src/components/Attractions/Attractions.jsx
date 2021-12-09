import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAttractions } from "../../services/yelpService"

const Attractions = (props) => {
  const [formData, setFormData] = useState({
    query: ''
  })
  const [results, setResults] = useState([])


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      getAttractions(formData.query)
        .then(results => {
          setResults(results.businesses)
        })
        .catch(() => {
          console.log("something went wrong!");
        })
    } catch (err) {
      console.log(err)
    }
  }

    const handleAddSubmit = (attraction) => {
    const trip = props.trip
    try {
      props.handleAddAttraction(attraction, trip)
    } catch (err) {
      console.log(err)
    }
  }

  const { query } = formData
  const isFormInvalid = () => {
    return !(query)
  }

  if (results === null) {
    return <div>Try a different search</div>;
  } else {
    return (
      <>
        <div>
          <h3>Attractions Search</h3>
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
            <button
              disabled={isFormInvalid()}
            >Get Attraction
            </button>
          </form>
          <div>
            {results.length ?
              <>
                <div className="restaurant-card">
                {results.map((attraction, idx) =>
                  <div className="child card" key={attraction._id}>
                    <img id="restaurant-img" src={attraction.image_url} className="card-img-top" alt="..."/>
                    {attraction.name &&
                      <h5 className="card-header">
                        {attraction.name}
                      </h5>
                    }
                    <p>Rating: {attraction.rating}/5</p>
                    <p>Price: {attraction.price}</p>
                    <p> Contact: {attraction.phone}</p>
                    <button className="btn btn-success" onClick={() => handleAddSubmit(attraction)}>Add to Trip</button>
                  </div>
                )}
              </div>
              </>
              :
              <h4>Search for a city to get results</h4>
            }
          </div>
        </div>
      </>
    );
  }
}
export default Attractions;

