import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import TripDetails from '../TripDetails/TripDetails'
import Profile from '../Profile/Profile'
import Unsplash from '../Unsplash/Unsplash'
import Yelp from '../Yelp/Yelp'
import * as authService from '../../services/authService'
import TripForm from '../../components/TripForm/TripForm'
import { createTrip , getTrips, addPackingItem, deletePackingItem, deleteTrip, addHotel, addFlight, deleteHotel, deleteFlight } from '../../services/tripService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [trips, setTrips] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		getTrips()
			.then(trips => setTrips(trips))
	}, [])

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleCreateTrip = tripData => {
		createTrip(tripData)
			.then(newTrip => setTrips([...trips, newTrip]))
	}
	
	const handleAddPackingItem = newItemData => {
		addPackingItem(newItemData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleDeletePackingItem = (itemId, tripId) => {
		// console.log("app.jsx", itemId, tripId)
		deletePackingItem(itemId, tripId)
		.then(updatedTrip => {
				console.log("app.jsx front end pack item", updatedTrip)
				const newTripState = trips.map(trip => trip._id === updatedTrip._id ? updatedTrip : trip)
				setTrips(newTripState)
				navigate('/tripDetails', {state: updatedTrip})
			})
	}

	const handleAddHotel = newHotelData => {
		addHotel(newHotelData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleDeleteHotel= (hotelId, tripId) => {
		// console.log("app.jsx", itemId, tripId)
		deleteHotel(hotelId, tripId)
		.then(updatedTrip => {
				console.log("app.jsx front end hotel", updatedTrip)
				const newTripState = trips.map(trip => trip._id === updatedTrip._id ? updatedTrip : trip)
				setTrips(newTripState)
				navigate('/tripDetails', {state: updatedTrip})
			})
	}

	const handleAddFlight = newFlightData => {
		addFlight(newFlightData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleDeleteFlight = (flightId, tripId) => {
		// console.log("app.jsx", itemId, tripId)
		deleteFlight(flightId, tripId)
		.then(updatedTrip => {
				console.log("app.jsx front end flight", updatedTrip)
				const newTripState = trips.map(trip => trip._id === updatedTrip._id ? updatedTrip : trip)
				setTrips(newTripState)
				navigate('/tripDetails', {state: updatedTrip})
			})
	}

	const handleDeleteTrip = (id) => {
		deleteTrip(id)
			.then(deletedTrip => {
				setTrips(trips.filter(trip => trip._id !== deletedTrip._id))
				navigate('/profile', {state: trips})
			})
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />	
				<Route path='/profile' element={user ? <Profile handleDeleteTrip={handleDeleteTrip} user={user} trips={trips}/> : <Navigate to='/signup' />} />
				<Route path='/addTrip' element={<TripForm  handleCreateTrip={handleCreateTrip} />} />
				<Route path='/searchUnsplash' element={<Unsplash />} />
				<Route path='/searchYelp' element={<Yelp />} />
				<Route path='/tripDetails' element={<TripDetails handleAddPackingItem={handleAddPackingItem} handleDeletePackingItem={handleDeletePackingItem} handleAddHotel={handleAddHotel} handleAddFlight={handleAddFlight} handleDeleteFlight={handleDeleteFlight} handleDeleteHotel={handleDeleteHotel}/>} />
			</Routes>
		</>
	);
}

export default App;