import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TripHeader = (props) => {
const location = useLocation()
	return (
		<h2>
      {location.state.city}
    </h2>
)}

export default TripHeader