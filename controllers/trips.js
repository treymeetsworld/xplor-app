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

function deletePackingItem(req, res) {
  console.log(req.params.id)
  
  Trip.findById(req.params.id)
  .then(trip => {
    trip.packList.slice(req.body)
    trip.save()
    .then(tripWithOutItem => {
      res.json(tripWithOutItem)
    })
  })
}

function addHotel(req, res) {
  Trip.findById(req.params.id)
  .then(trip => {
    trip.hotel.push(req.body)
    trip.save()
    .then(tripWithHotel => {
      res.json(tripWithHotel)
    })
  })
}

function addFlight(req, res) {
  Trip.findById(req.params.id)
  .then(trip => {
    trip.flights.push(req.body)
    trip.save()
    .then(tripWithFlight => {
      res.json(tripWithFlight)
    })
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
  addPackingItem,
  deletePackingItem,
  deleteTrip as delete,
  addHotel,
  addFlight,
}