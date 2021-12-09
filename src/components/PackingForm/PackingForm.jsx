import React, { useState } from 'react'
import { useLocation } from 'react-router-dom' 

const PackingForm = (props) => {
  const location = useLocation()

  const [formData, setFormData] = useState({
    item: '',
    category: 'cosmetics',
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
      props.handleAddPackingItem(formData)
      setFormData({
        item: '',
        category: 'cosmetics',
        trip: location.state._id
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  const { item, category } = formData

  const isFormInvalid = () => {
    return !(item)
  }

  return (
    <>
      <div>
        <form 
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <label>Item</label> 
        <input
          name="item" 
          value={item}
          onChange={handleChange} 
        /><br/>
        <label>Category</label> 
        <select className="form-select" value={category} name="category" onChange={handleChange} >
          <option value="cosmetics">cosmetics</option>
          <option value="bath">bath</option>
          <option value="clothes">clothes</option>
          <option value="medicine">medicine</option>
          <option value="accessories">accessories</option>
          <option value="documents">documents</option>
        </select>
        <br/>
        <button disabled={isFormInvalid()}>Add Item</button>
      </form>

      </div>
    </>
  )
}

export default PackingForm