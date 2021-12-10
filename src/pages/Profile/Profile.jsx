import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getTrips } from '../../services/tripService'
import { searchUnsplash } from '../../services/unsplashService'


const Profile = (props) => {
  const [myTrips, setMyTrips] = useState([])

  const [formData, setFormData] = useState({
    query: ''
  })
  const [results, setResults] = useState([])

  useEffect(() => {
    getTrips()
      .then(allTrips => {
        const allMyTrips = allTrips.filter(trip => trip.tripHolder === props.user.profile)
        setMyTrips(allMyTrips)
      })
  }, [props.trips])

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchUnsplash(formData.query)
        .then(results => {
          setResults(results.results)
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

  console.log("my trips", myTrips)
  return (
    <main className="container">
      <h1 className="text">
        {props.user.name}'s Trips
      </h1>
      <Link to='/addTrip' >Add trip</Link>
      <div>
        <ul className="trips">
          {myTrips.map(trip =>
            <li key={trip._id} className="trip">
              <img src='' alt="" />
              {trip.city}
              <Link to='/tripDetails' state={trip}>Trip Details</Link>
              <button onClick={() => props.handleDeleteTrip(trip._id)}>Delete Trip</button>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3>Search a Destination</h3>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={query}
              name="query"
              onChange={handleChange}
            />
            <button
              disabled={isFormInvalid()}
            >View your destination
            </button>
          </form>
          {results.length ?
            <>
              <h1>Destination</h1>
              <div className="restaurant-card destination" >
                {results.map((photos, idx) =>
                  <div className="child card destination" key={photos._id}>
                    <img id="restaurant-img" src={photos.urls.small} className="card-img-top" alt="..." />
                  </div>
                )}
              </div>
            </>
            :
            <h4>No results</h4>
          }
        </div>
    </main>
  )
}

export default Profile