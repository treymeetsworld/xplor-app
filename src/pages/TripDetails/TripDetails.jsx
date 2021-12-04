import React from 'react'
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingList from '../../components/PackingList/PackingList'
import Hotel from '../../components/Hotel/Hotel'
import Flight from '../../components/Flight/Flight'

const TripDetails = (props) => {
  return (
    <>
      <div>
        <TripHeader />
        <PackingList handleAddPackingItem={props.handleAddPackingItem}/>
        <Hotel />
        <Flight />
      </div>
    </>
  );
}

export default TripDetails;