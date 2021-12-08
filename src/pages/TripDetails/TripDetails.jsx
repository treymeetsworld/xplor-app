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
          <h1>Packing List</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Add An Item To Your Packing List
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <PackingForm handleAddPackingItem={props.handleAddPackingItem}/>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Packing List
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body parent">
                  {cosmeticItems.length ? 
                  <div class="card child">
                    <div class="card-header">
                      <h5>Cosmetics</h5>
                    </div>
                    {cosmeticItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
                  </div>
                  :
                  ''
                  }
                  
                  {clothesItems.length ? 
                  <div class="card child ">
                    <div class="card-header">
                      <h5>Clothes</h5>
                    </div>
                    {clothesItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
                  </div>
                  :
                  ''
                  }

                  {accessoriesItems.length ?  
                  <div class="card child ">
                    <div class="card-header">
                      <h5>Accessories</h5>
                    </div>
                    {accessoriesItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
                  </div>
                  :
                  ''
                  }

                  {documentsItems.length ?  
                  <div class="card child ">
                    <div class="card-header">
                      <h5>Documents</h5>
                    </div>
                    {documentsItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
                  </div>
                  :
                  ''
                  }

                  {bathItems.length ?  
                  <div class="card child ">
                    <div class="card-header">
                      <h5>Bath</h5>
                    </div>
                    {bathItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
                  </div>
                  :
                  ''
                  }
                  
                  {medicineItems.length ?  
                  <div class="card child ">
                    <div class="card-header">
                      <h5>Medicine</h5>
                    </div>
                    {medicineItems.map(thing => 
                    <ul key={thing._id} class="list-group list-group-flush">
                      <li class="list-group-item"><button title="delete item" className="btn pack-delete" onClick={() => props.handleDeletePackingItem(thing._id, location.state._id)}>x</button> {thing.item}</li>
                    </ul>
                    )}
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





  










