import React from 'react'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      <div className="main-div">
        <div className="details-header">
          <TripHeader />
        </div>
        <div className="bottom-big-div">
            <h1>Don't Forget Anything!</h1>
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
                            <li key={thing._id} className="list-group-item">
                              <input className='check-left' type="checkbox" />
                              <label htmlFor="checkbox" className="strike-item">
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
          <h1>Where are we staying, again?</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                  Add Your Hotel
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div className="accordion-body">
                  <HotelForm handleAddHotel={props.handleAddHotel} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                  My Hotels
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div className="accordion-body">
                  {location.state.hotel.length ?
                    <div className="parent">
                      {location.state.hotel.map(hotel =>
                        <div className="card child col-sm-4">
                          <div className="card-header" key={hotel._id}>
                            <h5>{hotel.name}</h5>
                          </div>
                          <div className="list-card-div">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">{hotel.address}</li>
                              <li className="list-group-item">Confirmation #: {hotel.confirmationNum}</li>
                              <li className="list-group-item"><button className="btn" onClick={() => props.handleDeleteHotel(hotel._id, location.state._id)}>Delete Hotel</button></li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    :
                    <h2>No Hotels, Yet!</h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <h1>Catch your flight!</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                  Add Your Flight
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div className="accordion-body">
                  <FlightForm handleAddFlight={props.handleAddFlight} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
                  My Flights
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div className="accordion-body">
                  {location.state.flights.length ?
                    <div className="parent">
                      {location.state.flights.map(flight =>
                        <div className="card child col-sm-4">
                          <div className="card-header" key={flight._id}>
                            <h5>Flight #: {flight.flightNo}</h5>
                          </div>
                          <div className="list-card-div">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">{flight.airport} - {flight.airline}</li>
                              <li className="list-group-item">Confirmation #: {flight.confirmationNum}</li>
                              <li className="list-group-item"><button className="btn" onClick={() => props.handleDeleteHotel(flight._id, location.state._id)}>Delete Hotel</button></li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    :
                    <h2>No Flights Info!</h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Where will we eat?</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseOne">
                  Find Restaurants To Add To Your Trip
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div className="accordion-body">
                  <Restaurants handleAddRestaurant={props.handleAddRestaurant} trip={location.state} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseTwo">
                  My Saved Restaurants
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div className="accordion-body">
                  {location.state.restaurants.length ?
                    <div className="restaurant-cards parent">
                      {location.state.restaurants.map(restaurant =>
                        <div key={restaurant._id} className="card child col-sm-2">
                          <div className="card-header" key={restaurant._id}>
                            <p>{restaurant.name}</p>
                            <img id='restaurant-img' className="card-img-top" src={restaurant.image_url} alt=""></img>
                            <p>Price: {restaurant.price}</p>
                            <button title="delete restaurant" className="btn card-delete" onClick={() => props.handleDeleteRestaurant(restaurant._id, location.state._id)}>Remove From Trip</button>
                          </div>
                        </div>
                      )}
                    </div>
                    :
                    <h2>No Restaurants, Yet! </h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>What can we do for fun?</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseOne">
                  Find Attractions To Add To Your Trip
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                <div className="accordion-body">
                  <Attractions handleAddAttraction={props.handleAddAttraction} trip={location.state} />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTwo">
                  My Saved Attractions
                </button>
              </h2>
              <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                
                <div className="accordion-body">
                  {location.state.attractions.length ?
                    <div className="restaurant-cards parent">
                      {location.state.attractions.map(attraction =>
                        <div key={attraction._id} className="card child col-sm-2">
                          <div className="card-header" key={attraction._id}>
                            <p>{attraction.name}</p>
                            <img id='restaurant-img' className="card-img-top" src={attraction.image_url} alt=""></img>
                            <button title="delete attraction" className="btn pack-delete" onClick={() => props.handleDeleteAttraction(attraction._id, location.state._id)}>Remove From Trip</button>
                          </div>
                        </div>
                      )}
                    </div>
                    :
                    <h2>No Attractions Planned! </h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </>
  );
}

export default TripDetails;
















