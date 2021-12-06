import React from 'react'
import { useLocation } from 'react-router-dom' 
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingForm from '../../components/PackingForm/PackingForm'
import HotelForm from '../../components/HotelForm/HotelForm'
import FlightForm from '../../components/FlightForm/FlightForm'
import Restaurants from '../../components/Restaurants/Restaurants'
import Attractions from '../../components/Attractions/Attractions'

const TripDetails = (props) => {

  const location = useLocation() 

  const cosmeticItems = location.state.packList.filter(packItem => packItem.category === "cosmetics")
  const clothesItems = location.state.packList.filter(packItem => packItem.category === "clothes")
  const medicineItems = location.state.packList.filter(packItem => packItem.category === "medicine")
  const bathItems = location.state.packList.filter(packItem => packItem.category === "bath")
  const accessoriesItems = location.state.packList.filter(packItem => packItem.category === "accessories")
  const documentsItems = location.state.packList.filter(packItem => packItem.category === "documents")
  return (
    <>
      <div>
        <div>
          <TripHeader />
        </div>
        <div>
          <h1>Packing Component</h1>
          <PackingForm handleAddPackingItem={props.handleAddPackingItem}/>
          {cosmeticItems.length ? 
            <div>
              <h2>Cosmetics:</h2>
              {cosmeticItems.map(thing => 
              <div key={thing._id}>
                <p>{thing.item}</p>
                <button onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
                </div>
                )}
            </div>
          :
          ''
          }
          {clothesItems.length ? 
            <div>
              <h2>Clothes:</h2>
              {clothesItems.map(thing => 
              <div key={thing._id}>
              <p>{thing.item}</p>
              <button onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
              </div>
              )}
            </div>
          :
          ''
          }
          {accessoriesItems.length ? 
            <div>
              <h2>Accessories:</h2>
              {accessoriesItems.map(thing => 
                <div key={thing._id}>
                <p>{thing.item}</p>
                <button onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
                </div>
              )}
            </div>
          :
          ''
          }
          {documentsItems.length ? 
            <div>
              <h2>Documents:</h2>
              {documentsItems.map(thing => 
                <div key={thing._id}>
                <p>{thing.item}</p>
                <button onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
                </div>
              )}
            </div>
          :
          ''
          }
          {bathItems.length ? 
            <div>
              <h2>Bath:</h2>
              {bathItems.map(thing => 
                <div className="delete-btn" key={thing._id}>
                <p>{thing.item}</p>
                <button onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
                </div>
              )}
            </div>
          :
          ''
          }
          {medicineItems.length ? 
            <div>
              <h2>Medicine:</h2>
              {medicineItems.map(thing => 
                <div className="delete-btn" key={thing._id}>
                <p>{thing.item}</p>
                <button  onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button>
                </div>
              )}
            </div>
          :
          ''
          }

        </div>
        <div>
          {location.state.hotel.length ? 
          <div>
            <h2>Hotel Info:</h2>
            {location.state.hotel.map(hotel => 
              <div key={hotel._id}>
                <p>{hotel.name} - {hotel.address}</p>
                <p>Confirmation #: {hotel.confirmationNum}</p>
                <button onClick={() => props.handleDeleteHotel(hotel._id, location.state._id)}>x</button>
              </div>
            )}
          </div>
          :
          <HotelForm handleAddHotel={props.handleAddHotel}/>
          }
        </div>
        <div>
          <FlightForm handleAddFlight={props.handleAddFlight}/>
          {location.state.flights.length ?
            <div>
              <h3>Flight Info:</h3>
              {location.state.flights.map(flight =>
                <div>
                  <p>{flight.airport} - {flight.airline}</p>
                  <p>Flight #: {flight.flightNo} - Confirmation #: {flight.confirmationNum}</p>
                  {/* need to add time and date here */}
                  <button  onClick={() => props.handleDeleteFlight(flight._id, location.state._id)}>x</button>
                </div>
              )}
            </div>
          :
          <p>No Flight Info</p>
          }
        </div>
        <div>
          <Restaurants />
        </div>
        <div>
          <Attractions />
        </div>
      </div>
    </>
  );
}

export default TripDetails;