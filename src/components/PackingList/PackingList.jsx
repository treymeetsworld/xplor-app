import React from 'react'
import PackingForm from '../../components/PackingForm/PackingForm'

import { useLocation } from 'react-router-dom' 

const PackingList = (props) => {
  
  const location = useLocation()
  
  return (
    <>
      <div>
        <h1>
          Packing List
          {location.state.packList}
        </h1>
        <PackingForm handleAddPackingItem={props.handleAddPackingItem}/>
        <h3>
          Items
        </h3>


      </div>
    </>
  )
}

export default PackingList