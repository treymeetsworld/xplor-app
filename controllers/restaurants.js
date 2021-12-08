import { Trip } from '../models/trip.js'
import { Restaurant } from '../models/restaurant.js'
import axios from 'axios'


function searchRestaurants(req, res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${req.params.query}&term=restaurants`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`, 'Content-Type': 'application/json'
    },
  })
    .then(apiResponse => res.json(apiResponse.data))
}

function createRestaurant(req, res) {
  axios.get(`https://api.yelp.com/v3/businesses/{id}`)
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => console.log(err, 'backend err'))
}

function addRestaurant(req, res) {
  console.log('req.body', req.body)
  const rest = new Restaurant()
  rest.name = req.body.name
  rest.imageUrl = req.body.image_url
  rest.location = req.body.location
  rest.price = req.body.price
  rest.save()
  Trip.findById(req.params.id)
    .then(trip => {
      trip.restaurants.push(rest)
      trip.save()
        .then(tripWithRestaurant => {
          res.json(tripWithRestaurant)
        })
    })
}


export {
  searchRestaurants,
  createRestaurant,
  addRestaurant
}