import React from 'react'
import { useLocation } from 'react-router-dom' 
import TripHeader from '../../components/TripHeader/TripHeader'
import PackingForm from '../../components/PackingForm/PackingForm'
import Hotel from '../../components/Hotel/Hotel'
import Flight from '../../components/Flight/Flight'
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
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }
          {clothesItems.length ? 
            <div>
              <h2>Clothes:</h2>
              {clothesItems.map(thing => 
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }
          {accessoriesItems.length ? 
            <div>
              <h2>Accessories:</h2>
              {accessoriesItems.map(thing => 
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }
          {documentsItems.length ? 
            <div>
              <h2>Documents:</h2>
              {documentsItems.map(thing => 
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }
          {bathItems.length ? 
            <div>
              <h2>Bath:</h2>
              {bathItems.map(thing => 
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }
          {medicineItems.length ? 
            <div>
              <h2>Medicine:</h2>
              {medicineItems.map(thing => 
                <p>{thing.item}</p>
              )}
            </div>
          :
          ''
          }

        </div>
        <div>
          <Hotel />
        </div>
        <div>
          <Flight />
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