import { Trip } from '../models/trip.js'

function index(req, res) {
  // User.find({})
  // .then(users => res.json(users))
}

function create(req, res) {
  console.log("ctrl", req.body)
  req.body.tripHolder = req.user.profile
  Trip.create(req.body)
  .then(trip => {
    res.json(trip)
  })
}

export {
  index,
  create
}