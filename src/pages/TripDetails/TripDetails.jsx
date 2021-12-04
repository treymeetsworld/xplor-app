import React from 'react'
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingList from '../../components/PackingList/PackingList'
import Hotel from '../../components/Hotel/Hotel'
import Flight from '../../components/Flight/Flight'


const TripDetails = (props) => {
  return (
    <>
      <div>
        <div>
          <TripHeader />
        </div>
        <div>
          <PackingList handleAddPackingItem={props.handleAddPackingItem}/>
        </div>
        <div>
          <Hotel />
        </div>
        <div>
          <Flight />
        </div>
      </div>
    </>
  );
}

export default TripDetails;