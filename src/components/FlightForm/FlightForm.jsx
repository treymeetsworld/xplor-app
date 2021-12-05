import React, { useState } from 'react'
import { useLocation } from 'react-router-dom' 

const FlightForm = (props) => {
  const location = useLocation()

  const [formData, setFormData] = useState({
    airport: '',
    airline: '',
    flightNo: '',
    confirmationNum: '',
    date: '',
    departureTime: '',
    landTime: '',
    trip: location.state._id
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddFlight(formData)
      setFormData({
        airport: '',
        airline: '',
        flightNo: '',
        confirmationNum: '',
        date: '',
        departureTime: '',
        landTime: '',
        trip: location.state._id
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  const { airport, airline, flightNo, date, departureTime, landTime, confirmationNum } = formData

  const isFormInvalid = () => {
    return !(confirmationNum)
  }

  return (
    <>
      <div>
        <h2>
          Flight Form
        </h2>
        <form 
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <label>Airport:</label> 
        <input
          name="airport" 
          value={airport}
          onChange={handleChange} 
        /><br/>
        <label>Airline:</label> 
        <input
          name="airline" 
          value={airline}
          onChange={handleChange} 
        /><br/>
        <label>Flight #:</label> 
        <input
          name="flightNo" 
          value={flightNo}
          onChange={handleChange} 
        /><br/>
        <label>Confirmation #:</label> 
        <input
          name="confirmationNum" 
          value={confirmationNum}
          onChange={handleChange} 
        /><br/>
        <label>Date</label> 
        <input
          type="date"
          name="date" 
          value={date}
          onChange={handleChange} 
        /><br/>
        <label>Departure Time</label> 
        <input
          name="departureTime" 
          value={departureTime}
          onChange={handleChange} 
        /><br/>
        <label>Land Time</label> 
        <input
          name="landTime" 
          value={landTime}
          onChange={handleChange} 
        /><br/>
        <button disabled={isFormInvalid()}>Add Flight Info</button>
      </form>

      </div>
    </>
  )
}

export default FlightForm