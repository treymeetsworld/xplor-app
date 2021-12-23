import { Trip } from '../models/trip.js'
import { Attraction } from '../models/attraction.js'
import axios from 'axios'

function getAttractions(req,res) {
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${req.params.query}&term=attractions&limit=10`,{
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`, 'Content-Type': 'application/json'
  },
  })
  .then(apiResponse => res.json(apiResponse.data))
}

function addAttraction(req, res) {
  Attraction.create(req.body)
  .then(att => {
    Trip.findById(req.params.id)
      .then(trip => {
        trip.attractions.push(att)
        trip.save() 
          .then(updatedTrip => {
            updatedTrip.populate('attractions')
            .then(tripAttraction => {
              res.json(tripAttraction)
            })
          })
      })
  })
}

export {
  getAttractions,
  addAttraction
}
