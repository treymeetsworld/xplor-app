import { getRandom } from '../../services/unsplashService'
import React, { useState } from 'react'
import david from '../../styles/assets/david.jpeg'

const Landing = ({ user }) => {

  const [photo, setPhotoResponse] = useState([])

  const [clicked, setClicked] = useState(false)


  function handleClick() {
    getRandom()
      .then(photo => {
        setPhotoResponse(photo)
      })
      .catch(() => {
        console.log("something went wrong!");
      })
  }

  function toggleClick() {
    clicked ? setClicked(false) : setClicked(true)
    console.log(clicked);
  }


  return (
    <>
      <main className="container-top">
        <div className="flex-top">
          <div className="top-1">
            <h1 className="logo">X'plor</h1>
            <h3 className="plan">PLAN</h3>
          </div>
          <div className="top-2">
            <div className={clicked ? "splash-landing" : "splash-landing-img"}>
              <span>HEROHEROHEROHEROHEROHERO</span>
              <div className="suggestion">
                <div onClick={toggleClick}
                  className="destination">Destination
                </div>
                <div className="arrival">Arrival</div>
                <div className="departure">Departure</div>
                <div className="expand">Expand</div>
              </div>
            </div>
          </div>
        </div><div className="splash-suggestion">
          <div className="h3-container">
            <h3>X'perience Top Destinations</h3>
          </div>
          <div className="choice-container">
            <div className="state">
              <h4>state</h4>
              <div className="svg"></div>
            </div>
            <div className="splash-choice"></div>
            <div className="splash-choice"></div>
            <div className="splash-choice"></div>
          </div>
        </div>
        <div className="attractions">
          <div className="h3-container">
            <h3>X'citing Attractions</h3>
          </div>
          <div className="evt-card-container">
            <div className="event-container">
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
            </div>
            <div className="event-details">
              <div className="evt-details-img"></div>
            </div>
          </div>
        </div>
        <div className="cuisine-container">
          <div className="h3-container">
            <h3>X'cuisite Cuisine</h3>
          </div>
          <div className="food-card-container">
            <div className="category">
            </div>
            <div className="food-choice">
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
            </div>
            <div className="food-details">
              <div className="food-details-img"></div>
            </div>
          </div>
        </div>
        <div className="final-plan">
        <div className="h3-container">
            <h1>Final Plan</h1>
          </div>
        </div>
      </main >
    </>
  )
}



export default Landing