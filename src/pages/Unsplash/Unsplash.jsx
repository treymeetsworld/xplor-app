import { randomPic } from '../../services/unsplashService'
import React, { useState } from 'react'


const Unsplash = () => {

  const [photo, setPhotoResponse] = useState([])



function handleClick() {
  randomPic()
  .then( photo => {
    setPhotoResponse(photo)
  })
  .catch(() => {
    console.log("something went wrong!");
  })
}


  return ( 
    <>
      <div>
        <button onClick={handleClick}>random photo</button>
        {photo.urls && 
        <img src={photo.urls.small} alt="random-pic" />
        }
      </div>
    </>
  );
}

export default Unsplash;


