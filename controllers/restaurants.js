import { Trip } from '../models/trip.js'
import { Restaurant } from '../models/restaurant.js'
import axios from 'axios'


function searchRestaurants(req,res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${req.params.query}&term=restaurants`,{
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`, 'Content-Type': 'application/json'
  },
  })
  .then(apiResponse => res.json(apiResponse.data))
}


// function createRestaurant(req,res) {
//   axios.get(`https://api.yelp.com/v3/businesses/{id}`)
//   .then(apiResponse => res.json(apiResponse.data))
//   .catch(err => console.log(err, 'backend err'))
// }


export {
  searchRestaurants,
}