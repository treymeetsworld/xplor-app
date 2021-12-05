import React, { useState } from 'react'
import { useLocation } from 'react-router-dom' 

const HotelForm = (props) => {
  const location = useLocation()

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    confirmationNum: '',
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
      props.handleAddHotel(formData)
      setFormData({
        name: '',
        address: '',
        confirmationNum: '',
        trip: location.state._id
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  const { name, address, confirmationNum } = formData

  const isFormInvalid = () => {
    return !(confirmationNum)
  }

  return (
    <>
      <div>
        <h2>
          Hotel Form
        </h2>
        <form 
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <label>Hotel Name:</label> 
        <input
          name="name" 
          value={name}
          onChange={handleChange} 
        /><br/>
        <label>Address:</label> 
        <input
          name="address" 
          value={address}
          onChange={handleChange} 
        /><br/>
        <label>Confirmation Number:</label> 
        <input
          name="confirmationNum" 
          value={confirmationNum}
          onChange={handleChange} 
        /><br/>
        <button disabled={isFormInvalid()}>Add Hotel Info</button>
      </form>

      </div>
    </>
  )
}

export default HotelForm