import { Link } from 'react-router-dom'
import React, { useState , useEffect } from 'react'
// import { getTrips } from '../../services/tripService'


const Profile = (props) => {
const [myTrips, setMyTrips] = useState([])

const allMyTrips = props.trips.filter(trip => trip.tripHolder === props.user.profile)

useEffect(() => {
  setMyTrips(allMyTrips)
},[])

  return (
    <main className="container">
      <h1 className="text">
        {props.user.name}'s Trips
      </h1>
      <Link to='/addTrip' >Add trip</Link>
      <div>
        <ul className="trips">
        {myTrips.map(trip => 
          <li className="trip">
            {trip.city}
          </li>
        )}
        </ul>
      </div>
    </main>
  )
}
 
export default Profile