import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingForm from '../../components/PackingForm/PackingForm'
import HotelForm from '../../components/HotelForm/HotelForm'
import FlightForm from '../../components/FlightForm/FlightForm'
import Restaurants from '../../components/Restaurants/Restaurants'
import Attractions from '../../components/Attractions/Attractions'
import 'bootstrap/dist/css/bootstrap.min.css'




const TripDetails = (props) => {
  const location = useLocation() 


  const changeClass = () => {
    
  }

  const cosmeticItems = location.state.packList.filter(packItem => packItem.category === "cosmetics")
  const clothesItems = location.state.packList.filter(packItem => packItem.category === "clothes")
  const medicineItems = location.state.packList.filter(packItem => packItem.category === "medicine")
  const bathItems = location.state.packList.filter(packItem => packItem.category === "bath")
  const accessoriesItems = location.state.packList.filter(packItem => packItem.category === "accessories")
  const documentsItems = location.state.packList.filter(packItem => packItem.category === "documents")

  return (
    <>
      <div className="main-div">
        <div>
          <TripHeader />
        </div>
        <div>
          <h1>Packing List</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Add An Item To Your Packing List
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div className="accordion-body">
                  <PackingForm handleAddPackingItem={props.handleAddPackingItem} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Packing List
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div className="accordion-body parent">
                  {cosmeticItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Cosmetics</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {cosmeticItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }

                  {clothesItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Clothes</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {clothesItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }
                  
                  {accessoriesItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Accessories</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {accessoriesItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }
                  
                  {documentsItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Documents</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {documentsItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }
                  
                  {bathItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Bath</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {bathItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }

                  {medicineItems.length ? 
                  <div className="card child">
                    <div className="card-header">
                      <h5>Medicine</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                    {medicineItems.map(thing => 
                    <li key={thing._id} class="list-group-item">
                      <input class='check-left' type="checkbox" />
                      <label htmlFor="checkbox" class="strike-item">
                      {thing.item}
                      <button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>X</button> 
                      </label>
                    </li>
                    )}
                    </ul>
                  </div>
                  :
                  ''
                  }
          
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1>Hotel Information</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Add Your Hotel
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div class="accordion-body">
                  <HotelForm handleAddHotel={props.handleAddHotel} />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Hotels
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div class="accordion-body">
                  {location.state.hotel.length ?
                    <div>
                      {location.state.hotel.map(hotel =>
                      <div className="card child col-sm-6">
                        <div className="card-header"key={hotel._id}>
                          {hotel.name}
                        </div>
                        <div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">{hotel.name} - {hotel.address}</li>
                            <li className="list-group-item">Confirmation #: {hotel.confirmationNum}</li>
                          </ul>
                        </div>
                        <div className="card-footer">
                          <button className="btn" onClick={() => props.handleDeleteHotel(hotel._id, location.state._id)}>Delete Hotel</button>
                        </div>
                      </div>
                      )}
                    </div>  
                  :
                  <h2>No Hotels Yet</h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
        <h1>Flight Information</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Add Your Flight
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div class="accordion-body">
                <FlightForm handleAddFlight={props.handleAddFlight} />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Flights
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div class="accordion-body">
                  {location.state.flights.length ?
                    <div>
                      {location.state.flights.map(flight =>
                      <div className="card child col-sm-6">
                        <div className="card-header"key={flight._id}>
                        Flight #: {flight.flightNo}
                        </div>
                        <div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">{flight.airport} - {flight.airline}</li>
                            <li className="list-group-item">Confirmation #: {flight.confirmationNum}</li>
                          </ul>
                        </div>
                        <div className="card-footer">
                          <button className="btn" onClick={() => props.handleDeleteHotel(flight._id, location.state._id)}>Delete Hotel</button>
                        </div>
                      </div>
                      )}
                    </div>  
                  :
                  <h2>No Flights Yet</h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1>Restaurants</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Find Restaurants To Add To Your Trip
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div class="accordion-body">
                  <Restaurants handleAddRestaurant={props.handleAddRestaurant} trip={location.state} />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Saved Restaurants
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div class="accordion-body">
                  <h2>Brey Put saved restaurants here =]</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1>Attractions</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Find Attractions To Add To Your Trip
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div class="accordion-body">
                <Attractions handleAddAttraction={props.handleAddAttraction} trip={location.state} />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Saved Attractions
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div class="accordion-body">
                  <h2>Brey Put saved attractions here =]</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TripDetails;
















