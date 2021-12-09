import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TripHeader = (props) => {
  const location = useLocation()
  const startDateString = (new Date(location.state.startDate)).toLocaleDateString()
  const endDateString = (new Date(location.state.endDate)).toLocaleDateString()
  return (
    <>
      <h1>
        X'plor {location.state.city}!
      </h1>
      <h2>
        Start Date: {startDateString}
        <br />
        End Date: {endDateString}
      </h2>
    </>
  )
}

export default TripHeader