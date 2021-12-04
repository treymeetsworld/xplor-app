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

function addPackingItem(req, res) {
  Trip.findById(req.params.id)
  .then(trip => {
    trip.packList.push(req.body)
    trip.save()
    .then(tripWithItem => {
      res.json(tripWithItem)
    })
  })
}

export {
  index,
  create,
  addPackingItem
}