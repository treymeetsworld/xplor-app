import { Trip } from '../models/trip.js'
import { Attraction } from '../models/attraction.js'
import axios from 'axios'

function getAttractions(req,res) {
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${req.params.query}&term=attractions`,{
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`, 'Content-Type': 'application/json'
  },
  })
  .then(apiResponse => res.json(apiResponse.data))
}

function addAttraction(req, res) {
  console.log('req.body', req.body)
  const rest = new Attraction()
  rest.name = req.body.name
  rest.imageUrl = req.body.image_url
  rest.location = req.body.location
  rest.price = req.body.price
  rest.save()
  Trip.findById(req.params.id)
    .then(trip => {
      trip.attractions.push(rest)
      trip.save()
        .then(tripWithAttraction => {
          res.json(tripWithAttraction)
        })
    })
}

export {
  getAttractions,
  addAttraction
}
