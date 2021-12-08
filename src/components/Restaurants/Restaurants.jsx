import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchRestaurant } from "../../services/yelpService"

const Restaurants = (props) => {
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
      searchRestaurant(formData.query)
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
            <button
              disabled={isFormInvalid()}
            >Get Restaurant
            </button>
          </form>
          {results.length ?
            <>
              <h1>Restaurants</h1>
              <div>
                {results.map((restaurant, idx) =>
                  <div key={restaurant._id}>
                    {restaurant.name &&
                      <p>
                        {restaurant.name}
                      </p>
                    }
                  </div>
                )}
              </div>
            </>
            :
            <h4>No results</h4>
          }
        </div>
      </>
    );
  }
}
export default Restaurants;





