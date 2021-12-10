import React from 'react'
import { useLocation } from 'react-router-dom'

const TripHeader = (props) => {
  const location = useLocation()
  const startDateString = (new Date(location.state.startDate)).toLocaleDateString()
  const endDateString = (new Date(location.state.endDate)).toLocaleDateString()
  return (
    <div className="xplor-text-div">
      <h1 className="xplor-here xplor-city">
        X'plor {location.state.city}!
      </h1>
      <h4 className="xplor-here xplor-date" >
        Trip Dates:   {startDateString} - {endDateString}
      </h4>
    </div>
  )
}

export default TripHeader