import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getTrips } from '../../services/tripService'
import { searchUnsplash } from '../../services/unsplashService'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <main className="main-area">
      <h1 className="profile-text">
        {props.user.name}'s Trips
      </h1>
      <Link className="btn btn-light" to='/addTrip' >Add trip</Link>
      <div className="parent-div">
        {myTrips.map(trip =>
          <div key={trip._id} className="card child-div col-sm-3" >
            <div className="card-header">
              <h3>{trip.city}</h3>
            </div>
            <div className="card-body trip-bottom-card">
              <Link className="btn btn-light" to='/tripDetails' state={trip}>Trip Details</Link>
              <button className="btn btn-light" onClick={() => props.handleDeleteTrip(trip._id)}>Delete Trip</button>
            </div>
          </div>
          )}
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
                <div className="destination-img" >
                {results.map((photos, idx) =>
                    <img id=""  key={photos._id} src={photos.urls.regular} className="city-img" alt="..." />
                    )}
                    </div>
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