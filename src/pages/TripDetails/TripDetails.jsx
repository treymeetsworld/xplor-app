import React from 'react'
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingList from '../../components/PackingList/PackingList'

const TripDetails = (props) => {
  return (
    <>
      <div>
        <TripHeader />
        <PackingList handleAddPackingItem={props.handleAddPackingItem}/>
      </div>
    </>
  );
}

export default TripDetails;