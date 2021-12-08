import { getRandom, searchUnsplash } from '../../services/unsplashService'
import React, { useState } from 'react'


const Unsplash = () => {

  const [photo, setPhotoResponse] = useState([])

  const [formData, setFormData] = useState({
    query: ''
  })
  const [results, setResults] = useState([])

  function handleClick() {
    getRandom()
      .then(photo => {
        setPhotoResponse(photo)
      })
      .catch(() => {
        console.log("something went wrong!");
      })
  }


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchUnsplash(formData.query)
        .then(results => {
          setResults(results.results)
        })
        .catch(() => {
          console.log("something went wrong!");
        })
    } catch (err) {
      console.log(err)
    }
  }

  const { query } = formData
  const isFormInvalid = () => {
    return !(query)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>random photo</button>
        {photo.urls &&
          <img src={photo.urls.small} alt="random-pic" />
        }
        <div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <p> search-query</p>
            <input
              type="text"
              value={query}
              name="query"
              onChange={handleChange}
            />
            <button
              disabled={isFormInvalid()}
            >Get Restaurant
            </button>
          </form>
          {results.length ?
            <>
              <h1>Restaurants</h1>
              <div className="restaurant-card">
                {results.map((photos, idx) =>
                  <div className="child card" key={photos._id}>
                    <img id="restaurant-img" src={photos.urls.small} className="card-img-top" alt="..." />
                    {photo.name &&
                      <h5 className="card-header">
                        {photo.name}
                      </h5>
                    }
                  </div>
                )}
              </div>
            </>
            :
            <h4>No results</h4>
          }
        </div>
      </div>
    </>
  );
}

export default Unsplash;


