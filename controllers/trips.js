import { Trip } from '../models/trip.js'

function index(req, res) {
  Trip.find({})
  .then(trips => {
    res.json(trips)
  })
}

function create(req, res) {
  console.log("ctrl", req.body)
  req.body.tripHolder = req.user.profile
  Trip.create(req.body)
  .then(trip => {
    res.json(trip)
  })
}

function deleteTrip(req,res) {
  Trip.findByIdAndDelete(req.params.id)
  .then(trip => {
    res.json(trip)
  })
}

export {
  index,
  create,
  deleteTrip as delete
}