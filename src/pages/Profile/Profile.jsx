import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getTrips } from '../../services/tripService'
import 'bootstrap/dist/css/bootstrap.min.css'



const Profile = (props) => {
  const [myTrips, setMyTrips] = useState([])


  useEffect(() => {
    getTrips()
      .then(allTrips => {
        const allMyTrips = allTrips.filter(trip => trip.tripHolder === props.user.profile)
        setMyTrips(allMyTrips)
      })
  }, [props.trips])

  console.log("my trips", myTrips)
  return (
    <main className="main-area">
      <h1 className="profile-text">
        {props.user.name}'s Trips
      </h1>
        <Link to='/searchUnsplash' >search</Link>
      <Link className="btn btn-light" to='/addTrip' >Add trip</Link>
      <div className="parent-div">
        {myTrips.map(trip =>
          <div key={trip._id} className="card child-div col-sm-3" >
            <div className="card-header">
              <h3>{trip.city}</h3>
            </div>
            <img className="card-img-top" src="" alt="" />
            <div className="card-body trip-bottom-card">
              <Link className="btn btn-light" to='/tripDetails' state={trip}>Trip Details</Link>
              <button className="btn btn-light" onClick={() => props.handleDeleteTrip(trip._id)}>Delete Trip</button>
            </div>
          </div>
          )}
      </div>
    </main>
  )
}

export default Profile