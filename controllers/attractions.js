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

export {
  getAttractions
}
